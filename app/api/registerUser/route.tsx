import { createUser } from "@/app/components/register";

export async function POST(request: Request) {

    if (request.method === 'POST') {

        const res = await request.json();

        const name = res.name.current
        const email = res.email.current
        const pass = res.pass.current

        var output = await createUser(name, email, pass)

        if(output){
            
            return new Response('the user already exists'), {
                status: 500,
            }

        }
        else{
        return new Response('New user has been created! :)', {
            status: 201,
            
        })
        }
    }
    
    
}