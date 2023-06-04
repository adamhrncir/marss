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
        where: { url: 'www.superweb.cz/rss' },
        update: {},
        create: {
            website_name: 'prvniweb',
            image: 'https://i.iinfo.cz/r/rss-88x31.gif',
            userId: 1,
            url: 'www.superweb.cz/rss'
        },
    })

    const rss2 = await prisma.rss.upsert({
        where: { url: 'www.druhyweb.cz/rss' },
        update: {},
        create: {
            website_name: 'druhyweb',
            image: 'https://i.iinfo.cz/r/rss-88x31.gif',
            userId: 1,
            url: 'www.druhyweb.cz/rss'
        },
    })

    const rss_content = await prisma.rss_content.upsert({
        where: { guid: 'superweb.cz/123-456' },
        update: {},
        create: {
            rssUrl: 'www.superweb.cz/rss',
            title: 'Bába pod kořenem',
            link: 'www.superweb.cz/clanky/babapodkorenem',
            description: 'babka spadla pod koren. 40 minut bila do dreva, nez si ji nekdo vsimnul.',
            userId: 1,
            guid: 'superweb.cz/123-456',
            fetchtime: 1685538618,
        }
    })

    const rss_content2 = await prisma.rss_content.upsert({
        where: { guid: 'druhyweb.cz/4651-456' },
        update: {},
        create: {
            rssUrl: 'www.druhyweb.cz/rss',
            title: 'Nic se nestalo',
            link: 'www.druhyweb.cz/clanky/niczajimavyho',
            description: 'Jiny popisek',
            userId: 1,
            guid: 'druhyweb.cz/4651-456',
            fetchtime: 1685542813,
        }
    })

    const rss_content3 = await prisma.rss_content.upsert({
        where: { guid: 'druhyweb.cz/4651-457' },
        update: {},
        create: {
            rssUrl: 'www.druhyweb.cz/rss',
            title: 'Stalo se hodně',
            link: 'www.druhyweb.cz/clanky/vsechnosestalo',
            description: 'HODNĚ VĚCÍ',
            userId: 1,
            guid: 'druhyweb.cz/4651-457',
            fetchtime: 1685542943,
        }
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