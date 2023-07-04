'use client'

import { SessionProvider } from 'next-auth/react'
import NextNProgress from 'nextjs-progressbar'

type Props = {
    children?: React.ReactNode
}


export const Providers = ({ children }: Props) => {
    return (
        <SessionProvider>
            <NextNProgress color='#32a852' />
            {children}
        </SessionProvider>
    )
}