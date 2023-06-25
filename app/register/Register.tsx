'use client'
import { useState } from "react";


export default function RegisterPage({ roles }: any) {
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    async function RegisterUser() {
        const res = await fetch('https://localhost:44391/api/Authentication/Register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                userName: userName,
                password: password,
                role: role,
            }),

        })
        return res.json();
    }

    return <>
        <form onSubmit={RegisterUser} method="post">
            <div>
                <label htmlFor="roli">Cakto Rolin</label>
                <select
                    id="roli"
                    onChange={(e) => setRole(e.currentTarget.value)}
                >
                    {roles.map((role: any) => (
                        <option key={role.id} value={role.name}>{role.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="userName">
                    userName
                </label>
                <input type="text" id="userName" onChange={(e) => setUserName(e.currentTarget.value)} />
            </div>
            <div>
                <label htmlFor="email">
                    Email
                </label>
                <input type="email" id="email" onChange={(e) => setEmail(e.currentTarget.value)} />
            </div>
            <div>
                <label htmlFor="password">
                    Password
                </label>
                <input type="password" id="password" onChange={(e) => setPassword(e.currentTarget.value)} />
            </div>

            <div className="btn-wrapper">
                <input type="submit" value="Register" />
            </div>
        </form>
    </>
}