import { checkEmail, verifyPassword } from "@/utils/handlers";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const options = {

    session: {
        jwt: true
    },
    providers: [
        CredentialsProvider({
            async authorize({ email, password }) {
                const user = checkEmail(email);
                let username = user.username;

                if (!user) {
                    throw new Error("User Already Exist")
                }

                const isValid = await verifyPassword(user.password, password);

                if (!isValid) {
                    throw new Error("incorrect password")
                }

                return { username, email };
            }
        })
    ]

}

export default NextAuth(options)