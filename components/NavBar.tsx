import Link from "next/link";

export default function NavBar() {
    return (
        <nav className=" p-4 bg-sky-400">
            <ul className="flex gap-2">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/profile">Profile</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}