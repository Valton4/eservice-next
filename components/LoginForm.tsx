'use client'
import { signIn } from "next-auth/react"
import { useState, useRef } from "react"
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function LoginForm() {
    const formData = useRef<HTMLFormElement>(null);
    const redirect = useRouter();

    async function Submit(e: any) {
        const { email, password } = formData.current as any
        e.preventDefault()
        const data = await signIn('credentials', {
            email: email.value,
            password: password.value,
            redirect: false
        })
        if (data?.ok) {
            redirect.push('/')
        }
    }


    return (

        <div className="container row m-auto items-center justify-center vh-100">
            <form ref={formData} className="col-lg-4" onSubmit={Submit} >
                <div className="mb-2">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="put your email" />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="put your password" />
                </div>
                <button className="btn btn-primary w-100" type="submit">Login</button>
                <p>Don't have an account? <Link href="/register">Register</Link></p>
            </form>
        </div>
    )
}