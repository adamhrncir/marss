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
    .findMany({ where: { url: obj2.rss_contentUrl } })

    const stringrss_content = JSON.stringify(rss_content)
    const obj3 = JSON.parse(stringrss_content)

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

export async function fetchIfFav(contentUrl: string) {

  const rss = await prisma.rss
  .findFirst({ where: { rss_contentUrl: contentUrl } })

  const stringrss = JSON.stringify(rss)
  const obj = JSON.parse(stringrss)

  console.log(obj.favourite)  

  return (obj.favourite)
}

export async function FavDisplay(favourite: boolean) {

  let image

  if (favourite){
    image = 'favourite.jpg'
  }
  else{
    image = 'notfavourite.jpg'
  }

  console.log(image)
  return image
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

export async function fetchFavs(email: string) {

  const userID = await prisma.user
    .findUnique({ where: { email: email } })

    const stringid = JSON.stringify(userID)
    const obj = JSON.parse(stringid)

    const rss = await prisma.rss
    .findMany({ where: { userId: obj.id , favourite: true  } })

    const stringrss = JSON.stringify(rss)
    const obj2 = JSON.parse(stringrss)

    

    return obj2
}

export async function fetchAllTags(email: string) {

  const userID = await prisma.user
    .findUnique({ where: { email: email } })

    const stringid = JSON.stringify(userID)
    const obj = JSON.parse(stringid)

    const rss_tag = await prisma.rss_tag
    .findMany({ where: { userId: obj.id } })

    const stringrss = JSON.stringify(rss_tag)
    const obj2 = JSON.parse(stringrss)

    

    return obj2
}