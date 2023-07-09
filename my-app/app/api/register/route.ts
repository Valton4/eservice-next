import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { registerUser, studentImage } = await request.json();

        const res = await fetch('https://localhost:44391/api/Authentication/Register', {
            method: 'POST',
            body: JSON.stringify({
                registerUser: {
                    Role: registerUser.role,
                    Email: registerUser.email,
                    Password: registerUser.password,
                    UserName: registerUser.userName,
                },
                studentImage: studentImage
            }),
        });

        if (res.ok) {
            const data = await res.json();

            if (data.message === 'Registration successful') {
                return NextResponse.json({ success: true, message: 'Registration successful' });
            } else {
                return NextResponse.json({ success: false, message: 'Registration failed' });
            }
        } else {
            return NextResponse.json({ success: false, message: 'Registration failed' + studentImage });
        }
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Internal server error' });
    }
}
