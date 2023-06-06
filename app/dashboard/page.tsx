import Image from 'next/image'
import Link from 'next/link'
import { fetchAllFeeds, fetchAll, fetchName, fetchImg } from "../components/rss-actions";
import { authOptions } from '../api/auth/[...nextauth]/route';
import { storeAllFeeds } from '../components/rss-actions';

import { getServerSession } from 'next-auth';
import { LogoutButton, LogoutButtonMobile } from '../dashboard/auth'
import { redirect } from 'next/navigation';


export default async function dashboardPage() {


  const session = await getServerSession(authOptions)
  
  
  const stringsess = JSON.stringify(session)
  const parsed = JSON.parse(stringsess)
  
  const mail = String(parsed.user.email)
  const rss = await storeAllFeeds(mail)

  const allFeeds = await fetchAllFeeds(mail)
  var listAll = await fetchAll(mail)

  if (listAll == ""){
    redirect('/dashboard/settings');
  }

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
                  src={listAll[0].imageUrl}
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={await fetchImg(await listAll[0].rssUrl)}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await listAll[0].rssUrl ) }
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
                  src={listAll[1].imageUrl}
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={await fetchImg(await listAll[1].rssUrl)}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await listAll[1].rssUrl ) }
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
                  src={listAll[2].imageUrl}
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={await fetchImg(await listAll[2].rssUrl)}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await listAll[2].rssUrl ) }
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
                  src={listAll[3].imageUrl}
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={await fetchImg(await listAll[3].rssUrl)}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await listAll[3].rssUrl ) }
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
                  src={listAll[4].imageUrl}
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={await fetchImg(await listAll[4].rssUrl)}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await listAll[4].rssUrl ) }
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
                  src={listAll[5].imageUrl}
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={await fetchImg(await listAll[5].rssUrl)}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await listAll[5].rssUrl ) }
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
                  src={listAll[6].imageUrl}
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={await fetchImg(await listAll[6].rssUrl)}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await listAll[6].rssUrl ) }
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
                  src={listAll[7].imageUrl}
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={await fetchImg(await listAll[7].rssUrl)}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await listAll[7].rssUrl ) }
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
                  src={listAll[8].imageUrl}
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={await fetchImg(await listAll[8].rssUrl)}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await listAll[8].rssUrl ) }
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
                  src={listAll[9].imageUrl}
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={await fetchImg(await listAll[9].rssUrl)}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await listAll[9].rssUrl ) }
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
                  src={listAll[10].imageUrl}
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={await fetchImg(await listAll[10].rssUrl)}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await listAll[10].rssUrl ) }
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
                  src={listAll[11].imageUrl}
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={await fetchImg(await listAll[11].rssUrl)}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await listAll[11].rssUrl ) }
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
                  src={listAll[12].imageUrl}
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={await fetchImg(await listAll[12].rssUrl)}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await listAll[12].rssUrl ) }
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
                  src={listAll[13].imageUrl}
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={await fetchImg(await listAll[13].rssUrl)}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await listAll[13].rssUrl ) }
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
                  src={listAll[14].imageUrl}
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={await fetchImg(await listAll[14].rssUrl)}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await listAll[14].rssUrl ) }
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
                  src={listAll[15].imageUrl}
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={await fetchImg(await listAll[15].rssUrl)}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await listAll[15].rssUrl ) }
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
                  src={listAll[16].imageUrl}
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={await fetchImg(await listAll[16].rssUrl)}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await listAll[16].rssUrl ) }
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
                  src={listAll[17].imageUrl}
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={await fetchImg(await listAll[17].rssUrl)}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await listAll[17].rssUrl ) }
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
                  src={listAll[18].imageUrl}
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={await fetchImg(await listAll[18].rssUrl)}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await listAll[18].rssUrl ) }
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
                  src={listAll[19].imageUrl}
                  width="100%"
                  height="100%"
                  alt="ilustracnifoto"
                  />
              </div>
              <div className="col-sm-7 weblogo">
                <p>
                  <img
                    
                    src={await fetchImg(await listAll[19].rssUrl)}
                    width="auto"
                    height="15px"
                    alt="logo" />
                  { await fetchName( await listAll[19].rssUrl ) }
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

