'use client'
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage({ roles }: any) {
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [error, setError] = useState('')
    async function handleSubmit(e: any) {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Role: role,
                Email: email,
                Password: password,
                UserName: userName,
            }),
        });
        if (response.ok) {
            const data = await response.json();
            return data
        }

        if (!response.ok)
            return setError("something went wrong")
    }

    return <div className="container vh-100 row items-center m-auto justify-center">
        <form className="col-lg-4" onSubmit={handleSubmit} method="post">
            <div className="mb-2">
                <label htmlFor="roli">Cakto Rolin</label>
                <select
                    id="roli"
                    onChange={(e) => setRole(e.currentTarget.value)}
                    className="form-select"
                >
                    <option value="0">--zgjedh rolin e perdoruseit--</option>
                    {roles.map((role: any) => (
                        <option key={role.id} value={role.name}>{role.name}</option>
                    ))}
                </select>
            </div>
            <div className="mb-2">
                <label htmlFor="userName">
                    userName
                </label>
                <input type="text" id="userName" className="form-control" onChange={(e) => setUserName(e.currentTarget.value)} />
            </div>
            <div>
                <label htmlFor="email">
                    Email
                </label>
                <input type="email" id="email" className="form-control" onChange={(e) => setEmail(e.currentTarget.value)} />
            </div>
            <div>
                <label htmlFor="password">
                    Password
                </label>
                <input type="password" id="password" className="form-control" onChange={(e) => setPassword(e.currentTarget.value)} />
                <p className=" text-red-700">{error}</p>
            </div>

            <div className="btn-wrapper ">
                <input type="submit" className="btn btn-primary w-100" value="Register" />
            </div>
            <p>Already have an account? <Link href="/login">Login</Link></p>
        </form>
    </div>
}