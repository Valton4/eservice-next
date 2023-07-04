import { NextResponse } from "next/server";



export const GET = async ({ userId, token }: any) => {
    try {
        const response = await fetch(`${process.env.API_URL}/api/Admin/student/${userId}/image`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const imageBlob = await response.blob();
            const imageUrl = URL.createObjectURL(imageBlob);
            return NextResponse.json({ success: true, message: 'Registration successful' });
        } else {
            console.error('Failed to fetch image');
        }
    } catch (error) {
        console.error('Error fetching image:', error);
    }
};