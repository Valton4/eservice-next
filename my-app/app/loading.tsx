'use client'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';


export default function Loading() {
    return <ProgressBar
        height="10px"
        color="#A2FF86"
        options={{ showSpinner: false }}
        shallowRouting
    />
}