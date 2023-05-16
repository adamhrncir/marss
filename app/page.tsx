import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'

export default function homePage() {
  return (
    <div className="main">
      
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
      <div className="row text-center">
      <div className="col-sm-6">
      <br></br>
      <Link href="/target-page">
      <button type="button" className="btn btn-outline-light btn-lg">Login</button>
      </Link>
      </div>
      <div className="col-sm-6">
      <br></br>
      <Link href="/target-page">
      <button type="button" className="btn btn-outline-light btn-lg">Register</button>
      </Link>
      </div>

    </div>

</div>



    </div>
  );
}