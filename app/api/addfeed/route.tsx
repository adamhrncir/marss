import { addFeed } from "@/app/components/settings";

export async function POST(request: Request) {

    if (request.method === 'POST') {

        const res = await request.json();

        const email = res.email
        const feedUrl = res.feedUrl.current
        const feedName = res.feedName.current
        const image = 'https://s2.googleusercontent.com/s2/favicons?domain_url=' + feedUrl

        addFeed(email, feedUrl, feedName, image)

        return new Response('Password changed :)', {
            status: 200,    
        })
    }
    else{
        return new Response('Something broke :(',{
            status: 500
        })
    }
    
}