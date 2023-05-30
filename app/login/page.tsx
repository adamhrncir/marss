import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<>
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
    <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
  </div>
  <div className="form-group">
    <label htmlFor="InputPassword1">Password</label>
    <input type="password" className="form-control" id="InputPassword1" placeholder="Password"></input>
  </div>
  <br></br>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="remember"/>
    <label className="form-check-label" htmlFor="Check1">remember me</label>
  </div>
<br></br>
<button type="button" className="btn btn-outline-light btn-lg" id="login">Login</button>
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
</>
  )
}
