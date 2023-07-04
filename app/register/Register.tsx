'use client'
import Link from 'next/link';
import React, { useRef } from 'react';
import { useState } from 'react';

function RegisterForm({ roles }: any) {
    const formData = useRef<HTMLFormElement>(null);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const { userName, email, password, role, studentImage } = formData.current as any

            const Form = new FormData();

            const { name, type, lastModified, size, webkitRelativePath } = studentImage.files[0]
            const obj = {
                name,
                lastModified,
                webkitRelativePath,
                size,
                type,
            }
            Form.append('UserName', userName.value);
            Form.append('Email', email.value);
            Form.append('Password', password.value);
            Form.append('Role', role.value);
            Form.append('studentImage', studentImage.files[0]);
            const response = await fetch('http://localhost:5102/api/Authentication/Register', {
                method: 'POST',
                body: Form,
            });

            if (response.ok) {
                return response.json()
            } else if (response.status === 403) {
                console.error('this user exsists')
            } else {
                console.log('something went wrong')
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (<div className="container row m-auto items-center justify-center vh-100">
        <form className='col-md-4' ref={formData} onSubmit={handleSubmit} >
            <div className="mb-2">
                <label>
                    Username:
                </label>

                <input
                    type="text"
                    name="userName"
                    className='form-control'
                />
            </div>
            <div className="mb-2">
                <label>
                    Email:
                </label>

                <input
                    type="email"
                    name="email"
                    className='form-control'
                />
            </div>
            <div className="mb-2">
                <label>
                    Password:
                </label>

                <input
                    type="password"
                    name="password"
                    className='form-control'
                />
            </div>

            <div className="mb-2">
                <label htmlFor="roli">Cakto Rolin</label>
                <select
                    id="roli"
                    name='role'
                    className="form-select"
                >
                    <option value="0">--zgjedh rolin e perdoruseit--</option>
                    {roles.map((role: any) => (
                        <option key={role.id} value={role.name}>
                            {role.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-2">
                <label>
                    Student Image:
                </label>

                <input type="file" className='form-control' name='studentImage' />
            </div>

            <button className='btn btn-primary w-100' type="submit">Register</button>
            <p>Already have an account? <Link href="/login">Login</Link></p>
        </form>
    </div>
    );
}

export default RegisterForm;
