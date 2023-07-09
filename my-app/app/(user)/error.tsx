'use client'
import {redirect} from "next/navigation";
import Link from "next/link";

export default function Error() {
    return (
        <>
            <p>Something went wrong...</p>
            <Link href={'/'}>go back to main page</Link>
        </>
    )
}