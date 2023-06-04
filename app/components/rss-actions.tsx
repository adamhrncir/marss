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
  .findFirst({ where: { rss_contentUrl: contentUrl } })

  const stringrss = JSON.stringify(rss)
  const obj = JSON.parse(stringrss)



  return obj.website_name
}

export async function fetchImg(contentUrl: string) {

  const rss = await prisma.rss
  .findFirst({ where: { rss_contentUrl: contentUrl } })

  const stringrss = JSON.stringify(rss)
  const obj = JSON.parse(stringrss)

  

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

    
    for (var i = 0; i < 1; i++) {
      
      console.log(obj2[i].url)
      

      await fetch('https://www.zive.cz/rss/')
        .then(response => {
          if (response.ok) {
            return response.text();
          }
        })
        .then(content => {
          
          var parseString = require('xml2js').parseString;
          parseString(content, function(err: any, result: any){
            console.log(result.rss.channel[0].item[0].title[0]);
            console.log(Object.keys(result.rss.channel[0].item).length)
            
            var max = Object.keys(result.rss.channel[0].item).length //max lenght for forloop
            for (var x = 0; x < max; x++){
              var title = result.rss.channel[0].item[x].title[0]
              var link = result.rss.channel[0].item[x].link[0]
              var description = result.rss.channel[0].item[x].description[0]
              var guid = result.rss.channel[0].item[x].guid[0]._
              
              createContent(title, link, description, guid)
              
            }
          });

        })

    }
  
  
}

async function createContent(title: string, link: string, description: string, guid: string){

  const createContent = await prisma.rss_content.create({
    data: {
      title,
      link,
      description,
      guid,
    },
  });
  console.log("created: " + createContent)

}