import {HeadTitle} from "@/components"
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {loggedInUser} from "@/types/interfaces";


export const revalidate = 1


export default async function Home() {
    const result: loggedInUser = await getData()
    return <>
        <HeadTitle title="Ballina" description="Literatura - publikimet e fundit"/>
        <h1>Home Page</h1>
        {
            <ul key={result.user.id}>
                <li> {result.user.userName}</li>
                <li> {result.user.email}</li>
                <li> {result.roles.map(e => (
                    <p className="mb-0">{e}</p>
                ))}</li>
            </ul>
        }
    </>
}


async function getData() {
    const session = await getServerSession(authOptions)
    const token = session?.user.token

    const res = await fetch(`${process.env.API_URL}/api/Admin/GetUser`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    const req = await res.json()
    if (res.ok && req)
        return req

    return new Response('something went wrong')
}