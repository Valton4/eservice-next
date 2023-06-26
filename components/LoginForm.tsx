'use client'
import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation";
export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const redirect = useRouter();

    async function Submit(e: any) {
        e.preventDefault()
        const data = await signIn('credentials', {
            email: email,
            password: password,
            redirect: false
        })
        if (data?.ok) {
            redirect.push('/home')
        }

    }


    return <>
        <form onSubmit={Submit} method="post">
            <div className="input-container">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.currentTarget.value)} placeholder="put your email" />
            </div>
            <div className="input-container">
                <label htmlFor="">Password</label>
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.currentTarget.value)} placeholder="put your password" />
            </div>
            <button type="submit">Login</button>
        </form>
    </>
}