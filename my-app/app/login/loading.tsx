'use client'
import {AppProgressBar as ProgressBar} from 'next-nprogress-bar';


export default function Loading() {
    return <ProgressBar
        height="10px"
        color="#6527BE"
        options={{showSpinner: true}}
        shallowRouting
    />
}