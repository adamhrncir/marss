import { prisma } from '@/lib/prisma'
// functions to use in rss feed fetching/sorting

export async function fetchAllFeeds(email: string){

    const userID = await prisma.user
    .findUnique({ where: { email: email } })

    const stringid = JSON.stringify(userID)
    const obj = JSON.parse(stringid)

    const rss = await prisma.rss
  .findMany({ where: { userId: obj.id } })

    const stringrss = JSON.stringify(rss)
    const obj2 = JSON.parse(stringrss)

    return obj2
}

export async function fetchAll(email: string) {

  const userID = await prisma.user
    .findUnique({ where: { email: email } })

    const stringid = JSON.stringify(userID)
    const obj = JSON.parse(stringid)

    const rss = await prisma.rss
    .findMany({ where: { userId: obj.id } })

    const stringrss = JSON.stringify(rss)
    const obj2 = JSON.parse(stringrss)

    const rss_content = await prisma.rss_content
    .findMany({ where: { rssUrl: obj2.url } })

    const stringrss_content = JSON.stringify(rss_content)
    const obj3 = JSON.parse(stringrss_content)

    console.log(obj2[0].url)

    return obj3
}

export async function fetchName(contentUrl: string) {

  const rss = await prisma.rss
  .findFirst({ where: { url: contentUrl } })

  const stringrss = JSON.stringify(rss)
  const obj = JSON.parse(stringrss)



  return obj.website_name
}

export async function fetchImg(contentUrl: string) {

  const rss = await prisma.rss
  .findFirst({ where: { url: contentUrl } })

  const stringrss = JSON.stringify(rss)
  const obj = JSON.parse(stringrss)

  console.log(obj.image)

  return obj.image
}


export async function fetchStart(email: string, search: string) {

  const userID = await prisma.user
    .findUnique({ where: { email: email } })

    const stringid = JSON.stringify(userID)
    const obj = JSON.parse(stringid)

    const rss = await prisma.rss
    .findMany({ where: { userId: obj.id } })

    const stringrss = JSON.stringify(rss)
    const obj2 = JSON.parse(stringrss)

    const rss_content = await prisma.rss_content
    .findMany({
      where: { title: { startsWith: search } }
    })

    const stringrss_content = JSON.stringify(rss_content)
    const obj3 = JSON.parse(stringrss_content)

    return obj3
}

export async function storeAllFeeds(email: string){

  const userID = await prisma.user
    .findUnique({ where: { email: email } })

    const stringid = JSON.stringify(userID)
    const obj = JSON.parse(stringid)

    const rss = await prisma.rss
    .findMany({ where: { userId: obj.id } })

    const stringrss = JSON.stringify(rss)
    const obj2 = JSON.parse(stringrss)

    var rssCount = await prisma.rss.count();

    for (var i = 0; i < rssCount; i++) {
      
      
      const userId = obj.id

      await fetch(obj2[i].url)
        .then(response => {
          if (response.ok) {
            return response.text();
          }
        })
        .then (content => {
          
          var parseString = require('xml2js').parseString;
          parseString(content, function(err: any, result: any){

            var max = Object.keys(result.rss.channel[0].item).length //max lenght for forloop
            for (var x = 0; x < max; x++){
              var title = result.rss.channel[0].item[x].title[0]
              var link = result.rss.channel[0].item[x].link[0]
              var description = result.rss.channel[0].item[x].description[0]
              var guid = result.rss.channel[0].item[x].guid[0]._
              var rssUrl = obj2[i].url

              try{
                var imageUrl = result.rss.channel[0].item[x]['media:content'][0]['$']['url']
              }
              catch(err){
                try {
                  var imageUrl = result.rss.channel[0].item[x].enclosure[0].$.url
                } catch (err) {
                  try {
                    var imageUrl = result.rss.channel[0].item[x]['szn:image'][0]['szn:url'][0]
                  } catch (err) {
                    var imageUrl = obj2[i].image
                  }
                }
              }
              createContent(title, link, description, guid, userId, rssUrl, imageUrl)
              
            }
          });

        })

    }
  
  
}

async function createContent(title: string, link: string, description: string, guid: string, userId: any, rssUrl: string, imageUrl: string){

  const createContent = await prisma.rss_content.create({
    data: {
      title,
      link,
      description,
      guid,
      userId,
      rssUrl,
      imageUrl
    },
  });
  console.log("created: " + createContent)

}