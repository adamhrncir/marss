import Image from 'next/image'
import Link from 'next/link'
import { fetchAllFeeds, fetchAll, fetchStart, fetchFavs, fetchAllTags, fetchName } from "../components/rss-actions";
import { authOptions } from '../api/auth/[...nextauth]/route';

import { getServerSession } from 'next-auth';
import { LogoutButton, LogoutButtonMobile } from '../dashboard/auth'


export default async function dashboardPage() {


  const session = await getServerSession(authOptions)
  
  const stringsess = JSON.stringify(session)
  const parsed = JSON.parse(stringsess)

  const mail = String(parsed.user.email)

  const allFeeds = await fetchAllFeeds(mail)
  const listAll = await fetchAll(mail)
  const listStart = await fetchStart(mail, 'bá')
  const listFavs = await fetchFavs(mail)

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
    <div className="logOutDashboard">
    <LogoutButton />
      </div>
      <div className="logOutMobileDashboard">
    <LogoutButtonMobile />
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
                <img
                  src="https:/i.iinfo.cz/r/rss-88x31.gif"
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={listAll[0].imageURL}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await allFeeds[0].rss_contentUrl ) }
                </p>
                <h4>{listAll[0].title}</h4>
              </div>
              <div className='col-sm-2'></div>

            </div>
          </Link>
          <hr></hr>



          <Link href={listAll[1].link} >
            <div className="row">
              <div className="col-sm-2 .ilustracnifoto">
                <img
                  src="https:/i.iinfo.cz/r/rss-88x31.gif"
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={listAll[1].imageURL}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await allFeeds[1].rss_contentUrl ) }
                </p>
                <h4>{listAll[1].title}</h4>
              </div>
              <div className='col-sm-2'></div>

            </div>
          </Link>
          <hr></hr>

          <Link href={listAll[2].link} >
            <div className="row">
              <div className="col-sm-2 .ilustracnifoto">
                <img
                  src="https:/i.iinfo.cz/r/rss-88x31.gif"
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={listAll[2].imageURL}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await allFeeds[2].rss_contentUrl ) }
                </p>
                <h4>{listAll[2].title}</h4>
              </div>
              <div className='col-sm-2'></div>

            </div>
          </Link>
          <hr></hr>

          <Link href={listAll[3].link} >
            <div className="row">
              <div className="col-sm-2 .ilustracnifoto">
                <img
                  src="https:/i.iinfo.cz/r/rss-88x31.gif"
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={listAll[3].imageURL}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await allFeeds[3].rss_contentUrl ) }
                </p>
                <h4>{listAll[3].title}</h4>
              </div>
              <div className='col-sm-2'></div>

            </div>
          </Link>
          <hr></hr>

          <Link href={listAll[4].link} >
            <div className="row">
              <div className="col-sm-2 .ilustracnifoto">
                <img
                  src="https:/i.iinfo.cz/r/rss-88x31.gif"
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={listAll[4].imageURL}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await allFeeds[4].rss_contentUrl ) }
                </p>
                <h4>{listAll[4].title}</h4>
              </div>
              <div className='col-sm-2'></div>

            </div>
          </Link>
          <hr></hr>

          <Link href={listAll[5].link} >
            <div className="row">
              <div className="col-sm-2 .ilustracnifoto">
                <img
                  src="https:/i.iinfo.cz/r/rss-88x31.gif"
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={listAll[5].imageURL}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await allFeeds[5].rss_contentUrl ) }
                </p>
                <h4>{listAll[5].title}</h4>
              </div>
              <div className='col-sm-2'></div>

            </div>
          </Link>
          <hr></hr>
          <Link href={listAll[6].link} >
            <div className="row">
              <div className="col-sm-2 .ilustracnifoto">
                <img
                  src="https:/i.iinfo.cz/r/rss-88x31.gif"
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={listAll[6].imageURL}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await allFeeds[6].rss_contentUrl ) }
                </p>
                <h4>{listAll[6].title}</h4>
              </div>
              <div className='col-sm-2'></div>

            </div>
          </Link>
          <hr></hr>

          <Link href={listAll[7].link} >
            <div className="row">
              <div className="col-sm-2 .ilustracnifoto">
                <img
                  src="https:/i.iinfo.cz/r/rss-88x31.gif"
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={listAll[7].imageURL}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await allFeeds[7].rss_contentUrl ) }
                </p>
                <h4>{listAll[7].title}</h4>
              </div>
              <div className='col-sm-2'></div>

            </div>
          </Link>
          <hr></hr>

          <Link href={listAll[8].link} >
            <div className="row">
              <div className="col-sm-2 .ilustracnifoto">
                <img
                  src="https:/i.iinfo.cz/r/rss-88x31.gif"
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={listAll[8].imageURL}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await allFeeds[8].rss_contentUrl ) }
                </p>
                <h4>{listAll[8].title}</h4>
              </div>
              <div className='col-sm-2'></div>

            </div>
          </Link>
          <hr></hr>

          <Link href={listAll[9].link} >
            <div className="row">
              <div className="col-sm-2 .ilustracnifoto">
                <img
                  src="https:/i.iinfo.cz/r/rss-88x31.gif"
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={listAll[9].imageURL}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await allFeeds[9].rss_contentUrl ) }
                </p>
                <h4>{listAll[9].title}</h4>
              </div>
              <div className='col-sm-2'></div>

            </div>
          </Link>
          <hr></hr>

          <Link href={listAll[10].link} >
            <div className="row">
              <div className="col-sm-2 .ilustracnifoto">
                <img
                  src="https:/i.iinfo.cz/r/rss-88x31.gif"
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={listAll[10].imageURL}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await allFeeds[10].rss_contentUrl ) }
                </p>
                <h4>{listAll[10].title}</h4>
              </div>
              <div className='col-sm-2'></div>

            </div>
          </Link>
          <hr></hr>

          <Link href={listAll[11].link} >
            <div className="row">
              <div className="col-sm-2 .ilustracnifoto">
                <img
                  src="https:/i.iinfo.cz/r/rss-88x31.gif"
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={listAll[11].imageURL}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await allFeeds[11].rss_contentUrl ) }
                </p>
                <h4>{listAll[11].title}</h4>
              </div>
              <div className='col-sm-2'></div>

            </div>
          </Link>
          <hr></hr>

          <Link href={listAll[12].link} >
            <div className="row">
              <div className="col-sm-2 .ilustracnifoto">
                <img
                  src="https:/i.iinfo.cz/r/rss-88x31.gif"
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={listAll[12].imageURL}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await allFeeds[12].rss_contentUrl ) }
                </p>
                <h4>{listAll[12].title}</h4>
              </div>
              <div className='col-sm-2'></div>

            </div>
          </Link>
          <hr></hr>

          <Link href={listAll[13].link} >
            <div className="row">
              <div className="col-sm-2 .ilustracnifoto">
                <img
                  src="https:/i.iinfo.cz/r/rss-88x31.gif"
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={listAll[13].imageURL}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await allFeeds[13].rss_contentUrl ) }
                </p>
                <h4>{listAll[13].title}</h4>
              </div>
              <div className='col-sm-2'></div>

            </div>
          </Link>
          <hr></hr>

          <Link href={listAll[14].link} >
            <div className="row">
              <div className="col-sm-2 .ilustracnifoto">
                <img
                  src="https:/i.iinfo.cz/r/rss-88x31.gif"
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={listAll[14].imageURL}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await allFeeds[14].rss_contentUrl ) }
                </p>
                <h4>{listAll[14].title}</h4>
              </div>
              <div className='col-sm-2'></div>

            </div>
          </Link>
          <hr></hr>

          <Link href={listAll[15].link} >
            <div className="row">
              <div className="col-sm-2 .ilustracnifoto">
                <img
                  src="https:/i.iinfo.cz/r/rss-88x31.gif"
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={listAll[15].imageURL}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await allFeeds[15].rss_contentUrl ) }
                </p>
                <h4>{listAll[15].title}</h4>
              </div>
              <div className='col-sm-2'></div>

            </div>
          </Link>
          <hr></hr>

          <Link href={listAll[16].link} >
            <div className="row">
              <div className="col-sm-2 .ilustracnifoto">
                <img
                  src="https:/i.iinfo.cz/r/rss-88x31.gif"
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={listAll[16].imageURL}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await allFeeds[16].rss_contentUrl ) }
                </p>
                <h4>{listAll[16].title}</h4>
              </div>
              <div className='col-sm-2'></div>

            </div>
          </Link>
          <hr></hr>

          <Link href={listAll[17].link} >
            <div className="row">
              <div className="col-sm-2 .ilustracnifoto">
                <img
                  src="https:/i.iinfo.cz/r/rss-88x31.gif"
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={listAll[17].imageURL}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await allFeeds[17].rss_contentUrl ) }
                </p>
                <h4>{listAll[17].title}</h4>
              </div>
              <div className='col-sm-2'></div>

            </div>
          </Link>
          <hr></hr>

          <Link href={listAll[18].link} >
            <div className="row">
              <div className="col-sm-2 .ilustracnifoto">
                <img
                  src="https:/i.iinfo.cz/r/rss-88x31.gif"
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={listAll[18].imageURL}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await allFeeds[18].rss_contentUrl ) }
                </p>
                <h4>{listAll[18].title}</h4>
              </div>
              <div className='col-sm-2'></div>

            </div>
          </Link>
          <hr></hr>

          <Link href={listAll[19].link} >
            <div className="row">
              <div className="col-sm-2 .ilustracnifoto">
                <img
                  src="https:/i.iinfo.cz/r/rss-88x31.gif"
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={listAll[19].imageURL}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await allFeeds[19].rss_contentUrl ) }
                </p>
                <h4>{listAll[20].title}</h4>
              </div>
              <div className='col-sm-2'></div>

            </div>
          </Link>
          <hr></hr>

          <div>
         
          </div></>

       </div>
    </>
  )
}

