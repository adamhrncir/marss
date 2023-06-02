'use client'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRef } from 'react'


const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  
  const userName = useRef("");
  const pass = useRef("");

  const onSubmit =async () => {
    const result = await signIn("credentials",{
        username:userName.current,
        password:pass.current,
        redirect:true,
        callbackUrl:"/dashboard"
    })
  }
  
  return (

<div className='main'>

<div className="center">
        <div className="image">
      <Image
        src="/images/logo.png"
        width={150}
        height={150}
        alt="logo"
        layout="responsive"
      />
      </div>
      </div>

<div className="register">



<form>
  <div className="form-group">
    <label htmlFor="InputEmail1">Email address</label>
    <input type="email" className="form-control" name="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => (userName.current = e.target.value)}></input>
  </div>
  <div className="form-group">
    <label htmlFor="InputPassword1">Password</label>
    <input type="password" className="form-control" name="inputPassword" placeholder="Password" onChange={(e) => (pass.current = e.target.value)}></input>
  </div>
<br></br>
<button type="button" className="btn btn-outline-light btn-lg" id="login" onClick={onSubmit}>Login</button>
</form>
<br></br>
<p className="center">Or you can use one of these login options</p>
<div className="center">
<Link href="/googleLogin">
      <button type="button" className="btn btn-outline-light btn-lg"><i className="bi bi-google"></i></button>
</Link>
&nbsp;&nbsp;&nbsp;
<Link href="/facebookLogin">
      <button type="button" className="btn btn-outline-light btn-lg"><i className="bi bi-facebook"></i></button>
</Link>
&nbsp;&nbsp;&nbsp;
<Link href="/githubLogin">
      <button type="button" className="btn btn-outline-light btn-lg"><i className="bi bi-github"></i></button>
</Link>

</div>
</div>

</div>
  )
}
