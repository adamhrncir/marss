import Image from 'next/image'
import { Inter } from 'next/font/google'


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
    <div className="col-sm-10">
     
    </div>
  </div>


<hr></hr>



<h1>RSS Feed</h1>
<p>To add more resources, enter the valid URL address</p>

<form>
  <div className="form-group">
    <input type="url" className="form-control" id="exampleInputEmail1"  placeholder="https://marss.cz/rss/ "/>
  </div>
  <br></br>
  <button type="submit" className="btn btn-outline-light">Add URL address</button>
</form>

<hr></hr>


</div>
</>
  )
}
