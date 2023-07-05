'use client'
import Link from "next/link";
import { signOut } from "next-auth/react"
export default async function NavBar() {

    return (
        <nav className=" p-4 bg-sky-400">
            <ul className="flex gap-2 mb-0 content-end">
                <li><Link className="nav-link" href="/">Home</Link></li>
                <li><Link className="nav-link" href="/attendance">Attendance</Link></li>
                <li><Link className="nav-link" href="/profile">Profile</Link></li>
                <li><Link className="nav-link" href="/finances">Finances</Link></li>
                <li>
                    <button onClick={() => signOut()}>SignOut</button>
                </li>
            </ul>
        </nav >
    )
}