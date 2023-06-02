import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { fetchAllFeeds, fetchAll, fetchStart, fetchFavs, fetchAllTags, fetchName } from "../components/rss-actions";
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { LogoutButton, LogoutButtonMobile } from '../dashboard/auth'

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
    <div className="logOutDashboard">
    <LogoutButton />
      </div>
      <div className="logOutMobileDashboard">
    <LogoutButtonMobile />
      </div>
  </div>



  <div className="col-sm-1">
    <div className="searchbuttonDashboard">
    <Link href="/dashboard/search">
  <button type="button" className="btn btn-sm btn-outline-light">
  <i className="bi bi-search"></i>
  &nbsp;Search&nbsp;
  </button>
  </Link> 
      </div>
      <div className="searchbuttonMobileDashboard">
    <Link href="/dashboard/search">
  <button type="button" className="btn btn-sm btn-outline-light">
  <i className="bi bi-search"></i>
  </button>
  </Link> 
      </div>
  </div>


  <div className="col-sm-1">
    <div className="settingsDashboard">
    <Link href="/dashboard/settings">
  <button type="button" className="btn btn-sm btn-outline-light">
  <i className="bi bi-gear-fill"></i>
  Settings
  </button>
  </Link> 
      </div>
      <div className="settingsMobileDashboard">
    <Link href="/dashboard/settings">
  <button type="button" className="btn btn-sm btn-outline-light">
  <i className="bi bi-gear-fill"></i>
  </button>
  </Link> 
      </div>
  </div>

</div>

<hr></hr>

          <><Link href={listAll[0].link} >
            <div className="row">
              <div className="col-sm-2 .ilustracnifoto">
                <Image
                  src="/images/test.jpg"
                  width={100}
                  height={130}
                  alt="ilustracnifoto"
                  layout="responsive" />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <Image
                    src="/images/rootlogo.gif"
                    width={50}
                    height={20}
                    alt="logo" />{' '}
                { await fetchName( await allFeeds[0].rss_contentUrl ) }
                </p>
                <h4>{listAll[0].title}</h4>
              </div>
              <div className='col-sm-2'></div>

            </div>
          </Link>
          
          <div>
         
          </div></>

        

        <hr />




      </div>
    </>
  )
}

