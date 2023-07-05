'use client'

import { SessionProvider } from 'next-auth/react'
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from '@/components/index';
type Props = {
    children?: React.ReactNode
}


export const Providers = ({ children }: Props) => {
    return (
        <SessionProvider>
            <NavBar />
            {children}
        </SessionProvider>
    )
}