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
    <div className="col-sm-8">
      
    </div>

    <div className="col-sm-1">
      <div className="searchbutton">
      <Link href="/search">
    <button type="button" className="btn btn-sm btn-outline-light">
    <i className="bi bi-search"></i>
    &nbsp;Search&nbsp;
    </button>
    </Link> 
        </div>
    </div>


    <div className="col-sm-1">
      <div className="settings">
      <Link href="/settings">
    <button type="button" className="btn btn-sm btn-outline-light">
    <i className="bi bi-gear-fill"></i>
    Settings
    </button>
    </Link> 
        </div>
    </div>

  </div>



<hr></hr>


<div className="row height d-flex justify-content-center align-items-center">

<div className="col-md-8">

  <div className="search">
  <i className="bi bi-search"></i>
    <input type="text" className="form-control" placeholder="Search"/>
    <button className="btn btn-primary">Search</button>
  </div>
  
</div>

</div>



</div>
</>
  )
}
