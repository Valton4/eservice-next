import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { HeadTitle } from "@/components/index";
import { getServerSession } from "next-auth";
import React from "react";
import ImageContainer from "./image";
export default async function Profile() {
    const session = await getServerSession(authOptions);
    const userId = session?.user.credentials.id
    const token = session?.user.token
    const fetchImage = async () => {
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

                return imageUrl
            } else {
                console.error('Failed to fetch image');
            }
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    };
    const image = await fetchImage();
    const data = await fetch(`${process.env.API_URL}/api/Admin/getUsers?userId=${userId}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${token}`
            },
        })
    const res = await data.json();
    return (
        <div >
            <HeadTitle title="Profili im" description="Edito të dhënat personale" />
            <div className="container m-auto mt-28 flex gap-4">
                <div className="left basis-1/3">
                    <div className="h-2/3 bg-white  pt-4 rounded-md">
                        <ImageContainer image={image} userId={userId} token={token} />
                        <div className="content">
                            <h1>{session?.user.credentials.userName}</h1>
                        </div>
                    </div>
                </div>
                <div className="right basis-2/3  ">
                    <div className="p-5 bg-white rounded-md border border-gray-500">
                        {res.user.map((el: any) => (
                            <div className="card">
                                <div className="grid gap-2 p-2">
                                    <label htmlFor="userName" className="text-lg">Emri i plotë</label>
                                    <input type="text" id="userName" className="text-lg border-b-2" value={el.userName} disabled />
                                </div>
                                <div className="grid gap-2 p-2">
                                    <label htmlFor="Email" className="text-lg">Emaili</label>
                                    <input type="text" id="Email" className="text-lg border-b-2" value={el.email} disabled />
                                </div>
                                <div className="grid gap-2 p-2">
                                    <label htmlFor="phoneNumber" className="text-lg">Numri i tel</label>
                                    <input type="text" id="phoneNumber" className="text-lg border-b-2" disabled />
                                </div>
                                <div className="grid gap-2 p-2">
                                    <label htmlFor="currentPassword" className="text-lg">Fjalkalimi aktual</label>
                                    <input type="text" id="currentPassword" className="text-lg border-b-2" placeholder="ju lutem vendosni fjalkalimin aktual" />
                                </div>
                            </div>
                        ))}
                        <div className="mt-4 flex gap-2 ">
                            <button className="btn btn-danger w-50">Ruaj Ndryshimet</button>
                            <button className="btn btn-primary w-50">Ndrysho numrin e telefonit</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}