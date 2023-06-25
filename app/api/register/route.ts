export default async function Register(req: any) {
    const { email, password, role, userName } = req as any

    const res = await fetch('https://localhost:44391/api/Authentication/Register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
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
        return { user }

}