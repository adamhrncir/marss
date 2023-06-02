import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { LogoutButton, LogoutButtonMobile, LoginButton } from '../auth'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<>
<div className='main'>


  <div className="row">
  
    <div className="col-sm-2">
      <div className="logo">
      <Link href="/dashboard">
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
    <div className="col-sm-7">
      </div>

      <div className="col-sm-1">
      <div className="logOut">
          <LogoutButton />
        </div>
        <div className="logOutMobile">
          <LogoutButtonMobile/>
        </div>
    </div>


    <div className="col-sm-1">
      <div className="searchbutton">
      <Link href="/dashboard/search">
    <button type="button" className="btn btn-sm btn-outline-light">
    <i className="bi bi-search"></i>
    &nbsp;Search&nbsp;
    </button>
    </Link> 
        </div>
        <div className="searchbuttonMobile">
      <Link href="/dashboard/search">
    <button type="button" className="btn btn-sm btn-outline-light">
    <i className="bi bi-search"></i>
    </button>
    </Link> 
        </div>
    </div>

    <div className="col-sm-1">
      <div className="home">
      <Link href="/dashboard">
    <button type="button" className="btn btn-sm btn-outline-light">
    <i className="bi bi-house-fill"></i>
   &nbsp;Home&nbsp;
    </button>
    </Link> 
        </div>
        <div className="homeMobile">
      <Link href="/dashboard">
    <button type="button" className="btn btn-sm btn-outline-light">
    <i className="bi bi-house-fill"></i>
    </button>
    </Link> 
        </div>
    </div>
  </div>


<hr></hr>



<h1>RSS Feed</h1>
<p>To add more resources, enter the valid URL address and name</p>

<form action="/addRSS" method="post">
  <div className="form-group">
    <input type="url" className="form-control" id="URLadress"  placeholder="https://marss.cz/rss/ "/>
<br></br>
    <input type="name" className="form-control" id="Name"  placeholder="Marss"/>
  </div>


<br></br>
  <button type="submit" className="btn btn-outline-light">Add URL address</button>

</form>



<hr></hr>

<h1>Password</h1>
<p>To change your password write your old and new password</p>

<form action="/changePassword" method="post">
  <div className="form-group">
    <input type="password" className="form-control" id="oldPassword"  placeholder="Old password"/>
<br></br>
    <input type="password" className="form-control" id="newPassword"  placeholder="New password"/>
    <br></br>
    <input type="password" className="form-control" id="newPasswordAgin"  placeholder="New password again"/>
  </div>
  <br></br>
  <button type="submit" className="btn btn-outline-light">Change password</button>


</form>

<hr></hr>

<h1>Weather</h1>
<p>To change your city to show weather write your new city</p>

<form action="/setWeatherCity" method="post">
  <div className="form-group">
    <input type="text" className="form-control" id="city"  placeholder="Prague"/>
    </div>
  <br></br>
  <button type="submit" className="btn btn-outline-light">Change city</button>


</form>

<hr></hr>

</div>
</>
  )
}
