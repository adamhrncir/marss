import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<>
<div className='main'>


  <div className="row">
  
    <div className="col-sm-2">
    <div className="logo">
    <Image
        src="/images/logo.png"
        width={150}
        height={150}
        alt="logo"
        layout="responsive"
      />
    </div>
    </div>
    <div className="col-sm-7">
      </div>

      <div className="col-sm-1">
      <div className="logOutSearch">
      <Link href="/logOut">
    <button type="button" className="btn btn-sm btn-outline-light">
    <i className="bi bi-box-arrow-right"></i><br></br>
    Log&nbsp;out
    </button>
    </Link> 
        </div>
        <div className="logOutMobileSearch">
      <Link href="/logOut">
    <button type="button" className="btn btn-sm btn-outline-light">
    <i className="bi bi-box-arrow-right"></i><br></br>

    </button>
    </Link> 
        </div>
    </div>


    <div className="col-sm-1">
      <div className="settingsSearch">
      <Link href="/settings">
    <button type="button" className="btn btn-sm btn-outline-light">
    <i className="bi bi-gear-fill"></i>
    Settings
    </button>
    </Link> 
        </div>
        <div className="settingsMobileSearch">
      <Link href="/settings">
    <button type="button" className="btn btn-sm btn-outline-light">
    <i className="bi bi-gear-fill"></i>
    </button>
    </Link> 
        </div>
    </div>

    <div className="col-sm-1">
      <div className="homeSearch">
      <Link href="/dashboard">
    <button type="button" className="btn btn-sm btn-outline-light">
    <i className="bi bi-house-fill"></i>
    &nbsp; Home
    </button>
    </Link> 
        </div>
        <div className="homeMobileSearch">
      <Link href="/dashboard">
    <button type="button" className="btn btn-sm btn-outline-light">
    <i className="bi bi-house-fill"></i>
    </button>
    </Link> 
        </div>
    </div>
  </div>

<hr></hr>


<div className="row height d-flex justify-content-center align-items-center">

<div className="col-md-8">

  <div className="search">
  <form action="/dashboard" method="GET">
  <i className="bi bi-search"></i>
  <input type="text" id="search" name="search" className="form-control" />
  <button type="submit"  className="btn btn-outline-dark">Search</button>
</form>

  </div>
  
</div>

</div>



</div>
</>
  )
}
