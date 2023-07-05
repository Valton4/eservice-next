'use client'

import { SessionProvider } from 'next-auth/react'
import "bootstrap/dist/css/bootstrap.min.css";
type Props = {
    children?: React.ReactNode
}


export const Providers = ({ children }: Props) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}