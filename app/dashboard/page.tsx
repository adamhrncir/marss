import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<>
<div className='main'>


  <div className="row">
  
    <div className="col-sm-2">
    <Image
        src="/images/logo.png"
        width={150}
        height={150}
        alt="logo"
        layout="responsive"
      />
    </div>
    <div className="col-sm-3">
      One of three columns
    </div>
    <div className="col-sm-3">
      One of three columns
    </div>
    <div className="col-sm-4">
    One of three columns
    </div>
  </div>



<hr></hr>

<a href="https://www.seznam.cz/">
<div className="row">
  
  <div className="col-sm-2 .ilustracnifoto">
  <Image
      src="/images/test.jpg"
      width={100}
      height={130}
      alt="ilustracnifoto"
      layout="responsive"
    />
  </div>
  <div className="col-sm-7">
  <p><Image
      src="/images/rootlogo.gif"
      width={50}
      height={20}
      alt="logo"
      
    /> root.cz &bull; 3h <span>NEW</span></p>
    <h4>KDE Plasma 6.0 nabídne Wayland, plovoucí panely a nový přepínač úloh</h4>

  </div>
  <div className="col-sm-2">
    </div>
</div>
</a>



<hr></hr>
<a href="https://www.seznam.cz/">
<div className="row">
  
  <div className="col-sm-2 .ilustracnifoto">
  <Image
      src="/images/test.jpg"
      width={100}
      height={130}
      alt="ilustracnifoto"
      layout="responsive"
    />
  </div>
  <div className="col-sm-7">
  <p><Image
      src="/images/rootlogo.gif"
      width={50}
      height={20}
      alt="logo"
      
    /> root.cz &bull; 3h <span>NEW</span></p>
    <h4>KDE Plasma 6.0 nabídne Wayland, plovoucí panely a nový přepínač úloh</h4>

  </div>
  <div className="col-sm-2">
    </div>
</div>
</a>
<hr></hr>
<a href="https://www.seznam.cz/">
<div className="row">
  
  <div className="col-sm-2 .ilustracnifoto">
  <Image
      src="/images/test.jpg"
      width={100}
      height={130}
      alt="ilustracnifoto"
      layout="responsive"
    />
  </div>
  <div className="col-sm-7">
  <p><Image
      src="/images/rootlogo.gif"
      width={50}
      height={20}
      alt="logo"
      
    /> root.cz &bull; 3h <span>NEW</span></p>
    <h4>KDE Plasma 6.0 nabídne Wayland, plovoucí panely a nový přepínač úloh</h4>

  </div>
  <div className="col-sm-2">
    </div>
</div>
</a>
<hr></hr>
<a href="https://www.seznam.cz/">
<div className="row">
  
  <div className="col-sm-2 .ilustracnifoto">
  <Image
      src="/images/test.jpg"
      width={100}
      height={130}
      alt="ilustracnifoto"
      layout="responsive"
    />
  </div>
  <div className="col-sm-7">
  <p><Image
      src="/images/rootlogo.gif"
      width={50}
      height={20}
      alt="logo"
      
    /> root.cz &bull; 3h <span>NEW</span></p>
    <h4>KDE Plasma 6.0 nabídne Wayland, plovoucí panely a nový přepínač úloh</h4>

  </div>
  <div className="col-sm-2">
    </div>
</div>
</a>





</div>
</>
  )
}
