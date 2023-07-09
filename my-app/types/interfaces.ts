export interface User {
    name?: string | null | undefined,
    role?: string;
    userName?: string
    accessToken?: string,
    token?: string,
    credentials?: string
}


export interface loggedInUser {
    user: {
        id: string,
        userName: string,
        email: string,
        passwordHash: string
    },
    roles: [string]
}