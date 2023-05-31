import { prisma } from '@/lib/prisma'
// functions to use in rss feed fetching/sorting

export async function fetchAllFeeds(email: string){

    const userID = await prisma.user
    .findUnique({ where: { email: email },  })

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
    .findUnique({ where: { email: email },  })

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

export async function fetchStart(email: string, search: string) {

  const userID = await prisma.user
    .findUnique({ where: { email: email },  })

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
    .findUnique({ where: { email: email },  })

    const stringid = JSON.stringify(userID)
    const obj = JSON.parse(stringid)

    const rss = await prisma.rss
    .findMany({ where: { userId: obj.id , favourite: true  } })

    const stringrss = JSON.stringify(rss)
    const obj2 = JSON.parse(stringrss)

    console.log(obj2)

    return obj2
}