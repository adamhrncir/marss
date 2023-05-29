import { LoginButton, LogoutButton } from "./components/auth";

export default async function homePage() {

  return (
    <div className="container text-center m-auto mt-2">
      <LoginButton />
      <LogoutButton />
      <h1>Welcome!</h1>
    </div>
  );
}