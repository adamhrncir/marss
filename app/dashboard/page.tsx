import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { LoginButton, LogoutButton } from "../components/auth";


export default async function dashboardPage() {
  const session = await getServerSession(authOptions)

  return (
    <div className="container text-center m-auto mt-2">
      <LoginButton />
      <LogoutButton />
      <pre>{JSON.stringify(session)}</pre>
    </div>
  );
}