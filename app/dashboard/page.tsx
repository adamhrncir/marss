import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { LoginButton, LogoutButton } from "./auth";
import { fetchAllFeeds, fetchAll, fetchName, fetchImg, fetchStart, storeAllFeeds } from "../components/rss-actions";


export default async function dashboardPage() {
  const session = await getServerSession(authOptions)
  
  
  const stringsess = JSON.stringify(session)
  const parsed = JSON.parse(stringsess)
  const user = String(parsed.user.email)
  
  const rss = await storeAllFeeds(user)
  
  const allpre = fetchAll(user)
  const allstring = JSON.stringify(allpre)
  const all = JSON.parse(allstring)
  


  return (
    <div className="container text-center m-auto mt-2">
      <LoginButton />
      <LogoutButton />
      <pre>{user}</pre>
      <pre>{}</pre>
      <h1>Welcome!</h1>
    </div>
  );
}