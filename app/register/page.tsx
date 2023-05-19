import Image from 'next/image'
import { Inter } from 'next/font/google'


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
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password again</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password again"></input>
  </div>
<br></br>
<button type="button" className="btn btn-outline-light btn-lg">Register</button>
</form>

</div>

</div>
</>
  )
}
