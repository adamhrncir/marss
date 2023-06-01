import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { fetchAllFeeds, fetchAll, fetchStart, fetchFavs, fetchAllTags, fetchName } from "../components/rss-actions";
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

const inter = Inter({ subsets: ['latin'] })











export default async function dashboardPage() {


  const session = await getServerSession(authOptions)
  
  const allFeeds = await fetchAllFeeds('test@example.com')
  const listAll = await fetchAll('test@example.com')
  const listStart = await fetchStart('test@example.com', 'bá')
  const listFavs = await fetchFavs('test@example.com')
  
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
    <div className="logOut">
    <Link href="/logOut">
  <button type="button" className="btn btn-sm btn-outline-light">
  <i className="bi bi-box-arrow-right"></i><br></br>
  Log&nbsp;out
  </button>
  </Link> 
      </div>
      <div className="logOutMobile">
    <Link href="/logOut">
  <button type="button" className="btn btn-sm btn-outline-light">
  <i className="bi bi-box-arrow-right"></i><br></br>

  </button>
  </Link> 
      </div>
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
      <div className="searchbuttonMobile">
    <Link href="/search">
  <button type="button" className="btn btn-sm btn-outline-light">
  <i className="bi bi-search"></i>
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
      <div className="settingsMobile">
    <Link href="/settings">
  <button type="button" className="btn btn-sm btn-outline-light">
  <i className="bi bi-gear-fill"></i>
  </button>
  </Link> 
      </div>
  </div>

</div>

<hr></hr>

        {listAll.map((article: any) => (
          <><Link href={article.link} key={article.id}>
            <div className="row">
              <div className="col-sm-2 .ilustracnifoto">
                <Image
                  src="/images/test.jpg"
                  width={100}
                  height={130}
                  alt="ilustracnifoto"
                  layout="responsive" />
              </div>
              <div className="col-sm-7">
                <p>
                  <Image
                    src="/images/rootlogo.gif"
                    width={50}
                    height={20}
                    alt="logo" />{' '}
                  {article.website_name} &bull; 3h <span>NEW</span>
                </p>
                <h4>{article.title}</h4>
              </div>
              <div className='col-sm-2'></div>

            </div>
          </Link>
          
          <div>
          <div className="heart">
             <form action="something" method="POST">
              <button type="submit" className="btn btn-bg btn-link"><h5><i className="bi bi-heart-fill"></i></h5></button>
              </form>
            </div>
          </div></>

        ))}

        <hr />
      </div>
    </>
  )
}

