'use client'

import { signIn, signOut } from 'next-auth/react'

export const LoginButton = () => {
    return <button onClick={() => signIn()}>Sign in</button>
}

export const LogoutButton = () => {
    return <button type="button" className="btn btn-sm btn-outline-light" onClick={() => signOut()}> 
    <i className="bi bi-box-arrow-right"></i><br></br>
    Log&nbsp;out
    </button>
}

export const LogoutButtonMobile = () => {
    return <button type="button" className="btn btn-sm btn-outline-light" onClick={() => signOut()}> 
    <i className="bi bi-box-arrow-right"></i><br></br>
    </button>
}