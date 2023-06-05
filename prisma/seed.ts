import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
    const password = await hash('test', 12)
    const user = await prisma.user.upsert({
        where: { email: 'test@example.com' },
        update: {},
        create: {
            email: 'test@example.com',
            name: 'Test Usr',
            password
        },
    })
    
    const rss = await prisma.rss.upsert({
        where: { url: 'https://www.zive.cz/rss/' },
        update: {},
        create: {
            website_name: 'ZIVE',
            image: 'https://i.iinfo.cz/r/rss-88x31.gif',
            userId: 1,
            url: 'https://www.zive.cz/rss/'
        },
    })

    const rss2 = await prisma.rss.upsert({
        where: { url: 'https://servis.idnes.cz/rss.aspx?c=zpravodaj' },
        update: {},
        create: {
            website_name: 'idnes',
            image: 'https://i.iinfo.cz/r/rss-88x31.gif',
            userId: 1,
            url: 'https://servis.idnes.cz/rss.aspx?c=zpravodaj'
        },
    })

    console.log('uspesny seed')
}
main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })