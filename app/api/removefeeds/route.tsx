import { removeAllFeeds } from "@/app/components/settings";

export async function POST(request: Request) {

    if (request.method === 'POST') {

        const res = await request.json();

        const email = res.email.current

        removeAllFeeds(email)

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