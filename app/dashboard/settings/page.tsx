'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

import { useRef } from 'react'
import { LogoutButton, LogoutButtonMobile } from '../auth'
import { getSession } from "next-auth/react"

const inter = Inter({ subsets: ['latin'] })









export default function settingsPage() {


 async function getSess() {
/*const session = await getSession()


  const stringsess = JSON.stringify(session)
  const parsed = JSON.parse(stringsess)
  //const user = String(parsed.user.email)
  console.log(parsed)
  console.log(session)
*/



// return user 

  }

  async function logJSONData() {
    const response = await fetch("http://localhost:3000/api/auth/session");
    const jsonData = await response.json();

    const stringrss = JSON.stringify(jsonData)
    const obj2 = JSON.parse(stringrss)
    console.log(jsonData);



  }


const email = "test@example.com"


  getSess();
  logJSONData();

  const pass = useRef("");
  const pass2 = useRef("");
  const urlfeed = useRef("");
  const feedName = useRef("");

  const changePassword = async () => {

      if (pass.current == pass2.current && pass.current != "") {

          
          const send = await fetch('/api/changePassword',{
              method: 'POST',
              body: JSON.stringify({ email, pass }),
              headers: {
                  'Content-Type': 'application/json',
              },
          })

          
      }
      else{
          alert('The passwords do not match! >:(')
      }

  }

  //const email = getSess();

  const addFeed = async () => {
          const send = await fetch('/api/addFeed',{
            method: 'POST',
            body: JSON.stringify({ email, urlfeed, feedName }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
}

const deleteFeed = async () => {
  const send = await fetch('/api/deleteFeed',{
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: {
        'Content-Type': 'application/json',
    },
})
}





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
    <div className="col-sm-8">
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
    <input type="url" className="form-control" id="URLadress"  placeholder="https://marss.cz/rss/" onChange={(e) => (urlfeed.current = e.target.value)} required/>
<br></br>
    <input type="name" className="form-control" id="Name"  placeholder="Marss" onChange={(e) => (feedName.current = e.target.value)}/>
  </div>


<br></br>
  <button type="button" className="btn btn-outline-light" onClick={addFeed}>Add URL address</button>

</form>
<form action="/deleteAllRSS" method="post">
<br></br>
  <button type="submit" className="btn btn-outline-light" onClick={deleteFeed}>Dellete all feeds</button>

</form>



<hr></hr>

<h1>Password</h1>
<p>To change your password write your old and new password</p>

<form action="/changePassword" method="post">
  <div className="form-group">
   
    <input type="password" className="form-control" id="newPassword"  placeholder="New password" onChange={(e) => (pass.current = e.target.value)} required/>
    <br></br>
    <input type="password" className="form-control" id="newPasswordAgin"  placeholder="New password again" onChange={(e) => (pass2.current = e.target.value)} required/>
  </div>
  <br></br>
  <button type="button" className="btn btn-outline-light" onClick={changePassword}>Change password</button>


</form>

<hr></hr>

{/*

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

*/}

</div>
</>
  )
}

