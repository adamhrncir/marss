import { addFeed } from "@/app/components/settings";

export async function POST(request: Request) {

    if (request.method === 'POST') {

        const res = await request.json();

        const email = res.email.current
        const feedUrl = res.feedUrl.current
        const feedName = res.feedName.current
        var fetchFavicon = require('@meltwater/fetch-favicon').fetchFavicon
        const image = fetchFavicon(feedUrl)

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