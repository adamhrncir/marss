import { prisma } from '@/lib/prisma'
import { hash } from 'bcrypt'



export async function changePass(email: string, inputPass: string){


    const pass = await hash(inputPass, 12)

    const user = await prisma.user.update({
        data: {
            password: pass
        },
        where: {
            email: email,
        },
    });

}

export async function addFeed(email: string, feedUrl: string, feedName: string, image: string) {
    
    const userID = await prisma.user
    .findUnique({ where: { email: email } })

    const stringid = JSON.stringify(userID)
    const obj = JSON.parse(stringid)

    const user = obj.id;

    const feed = await prisma.rss.upsert({
        update: {},
        where: {
            url: feedUrl,
        },
        create: {
            website_name: feedName,
            url: feedUrl,
            image,
            userId: user
        },
    })
}

export async function removeAllFeeds(email: string){

    const userID = await prisma.user
    .findUnique({ where: { email: email } })

    const stringid = JSON.stringify(userID)
    const obj = JSON.parse(stringid)

    const user = obj.id;

    const deleteAllFeeds = await prisma.rss.deleteMany({
        where:{
            userId: user
        }
    })

}