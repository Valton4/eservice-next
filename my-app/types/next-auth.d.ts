import { User } from "./interfaces";

declare module "next-auth" {
    interface Session {
        user: User.user
        token: token
    }
}