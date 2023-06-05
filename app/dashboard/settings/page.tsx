'use client'
import Image from 'next/image'
import Link from 'next/link'

import { useRef } from 'react'
import { LogoutButton, LogoutButtonMobile } from '../auth'
import { useSession } from "next-auth/react"

export default function settingsPage() {

const session = useSession()

const email = session.user.email //!CHECK

  const pass = useRef("");
  const pass2 = useRef("");
  const feedUrl = useRef("");
  const feedName = useRef("");

  const changePassword = async () => {

      if (pass.current == pass2.current && pass.current != "") {

          
          const send = await fetch('/api/changepassword',{
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

  const addFeed = async () => {
          const send = await fetch('/api/addfeed',{
            method: 'POST',
            body: JSON.stringify({ email, feedUrl, feedName }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
}

const deleteFeed = async () => {
  const send = await fetch('/api/removefeeds',{
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

<form>
  <div className="form-group">
    <input type="url" className="form-control" id="URLadress"  placeholder="https://marss.cz/rss/" onChange={(e) => (feedUrl.current = e.target.value)} required/>
<br></br>
    <input type="name" className="form-control" id="Name"  placeholder="Marss" onChange={(e) => (feedName.current = e.target.value)}/>
  </div>


<br></br>
  <button type="button" className="btn btn-outline-light" onClick={addFeed}>Add URL address</button>

</form>
<form>
<br></br>
  <button type="button" className="btn btn-outline-light" onClick={deleteFeed}>Dellete all feeds</button>

</form>



<hr></hr>

<h1>Password</h1>
<p>To change your password write your old and new password</p>

<form>
  <div className="form-group">
   
    <input type="password" className="form-control" id="newPassword"  placeholder="New password" onChange={(e) => (pass.current = e.target.value)} required/>
    <br></br>
    <input type="password" className="form-control" id="newPasswordAgin"  placeholder="New password again" onChange={(e) => (pass2.current = e.target.value)} required/>
  </div>
  <br></br>
  <button type="button" className="btn btn-outline-light" onClick={changePassword}>Change password</button>


</form>

</div>
</>
  )

}
