import Link from "next/link";
import { getServerSession } from 'next-auth'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { SignOutButton } from "@/components/index";
export default async function NavBar() {
    const session = await getServerSession(authOptions);
    return (
        <nav className=" p-4 bg-sky-400">
            <ul className="flex gap-2 mb-0 content-end">
                <li><Link className="nav-link" href="/">Home</Link></li>
                <li><Link className="nav-link" href="/attendance">Attendance</Link></li>
                <li><Link className="nav-link" href="/profile">Profile</Link></li>
                <li><Link className="nav-link" href="/finances">Finances</Link></li>
                <li><SignOutButton /></li>
            </ul>
        </nav>


    )
}