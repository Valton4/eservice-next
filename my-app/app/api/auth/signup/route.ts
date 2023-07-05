export async function POST(request: Request) {

    const { email, password, role, userName } = request as any
    const res = await fetch(`${process.env.API_URL}/api/Authentication/Register`, {
        method: "POST",
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
            role: role,
            userName: userName
        })
    })
    const user = await res.json();
    if (res.ok && user)
        return { data: user };


}