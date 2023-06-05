'use client'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRef } from 'react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const name = useRef("");
    const email = useRef("");
    const pass = useRef("");
    const pass2 = useRef("");

    const onSubmit = async () => {

        if (pass.current == pass2.current && pass.current != "") {

            //const result = await createUser(email.current, pass.current)

            const send = await fetch('/api/registerUser',{
                method: 'POST',
                body: JSON.stringify({ name, email, pass }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            
            if(send.status == 500){
              alert('Uživatel již existuje')
            }

        }
        else{
            alert('The passwords do not match! >:(')
        }

    }

  return (
<>
<div className='main'>

<div className="center">
        <div className="image">
        <Link href="/">
      <Image
        src="/images/logo.png"
        width={150}
        height={150}
        alt="logo"
        layout="responsive"
        />
        </Link>
      </div>
      </div>

<div className="register">

<form>
    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" id="nameInput" aria-describedby="name" placeholder="Enter your name" onChange={(e) => (name.current = e.target.value)}></input>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => (email.current = e.target.value)}></input>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => (pass.current = e.target.value)}></input>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password again</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password again" onChange={(e) => (pass2.current = e.target.value)}></input>
  </div>
<br></br>
<Link href="/auth/login" prefetch={false}>
<button type="button" className="btn btn-outline-light btn-lg" onClick={onSubmit}>Register</button>
</Link>
</form>

</div>

</div>
</>
  )
}
