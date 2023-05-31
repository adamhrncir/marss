import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'
import { now } from 'next-auth/client/_utils'

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

    const rss_content = await prisma.rss_content.upsert({
        where: { url: 'www.superweb.cz/rss' },
        update: {},
        create: {
            url: 'www.superweb.cz/rss',
            title: 'Bába pod kořenem',
            link: 'www.superweb.cz/clanky/babapodkorenem',
            description: 'babka spadla pod koren. 40 minut bila do dreva, nez si ji nekdo vsimnul.',
            guid: 'superweb.cz/123-456',
            fetchtime: 1685538618,
        }
    })
    
    const rss = await prisma.rss.upsert({
        where: { id: 1 },
        update: {},
        create: {
            website_name: 'xd',
            userId: 1,
            rss_contentUrl: 'www.superweb.cz/rss'

        },
    })


    console.log({ user })
    console.log({ rss })
    console.log({ rss_content })
}
main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })