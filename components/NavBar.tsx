import Link from "next/link";
import { getServerSession } from 'next-auth'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { SignOutButton } from "./SignOutButton";
export default async function NavBar() {
    const session = await getServerSession(authOptions);
    return (
        <nav className=" p-4 bg-sky-400">
            <ul className="flex gap-2  content-end">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/attendance">Attendance</Link></li>
                <li><Link href="/profile">Profile</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                {session && <li><SignOutButton /></li>}
            </ul>
        </nav>


    )
}