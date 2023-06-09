import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation';
import { authOptions } from "../api/auth/[...nextauth]/route";
import { NextAuthProvider } from "./providers";

export default async function RootLayout({ children }: any) {

    const session = await getServerSession(authOptions)

    if (!session) {
      redirect('/')
    }

    return (
        
          <NextAuthProvider>{children}</NextAuthProvider>
    );
  }