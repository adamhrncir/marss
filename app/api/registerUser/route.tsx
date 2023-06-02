import { createUser } from "@/app/components/register";
import { redirect } from "next/navigation";

export async function POST(request: Request) {

    if (request.method === 'POST') {

        const res = await request.json();

        const name = res.name.current
        const email = res.email.current
        const pass = res.pass.current

        createUser(name, email, pass)

        

        return new Response('New user has been created! :)', {
            status: 201,
             
        })

    }
    else{
        return new Response('Something broke :(',{
            status: 500
        })
    }
    
}