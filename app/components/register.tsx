import { prisma } from '@/lib/prisma'
import { hash } from 'bcrypt'



export async function createUser(name: string, email: string, inputPass: string){


    const pass = await hash(inputPass, 12)

    const user = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: pass
        }
    });

}