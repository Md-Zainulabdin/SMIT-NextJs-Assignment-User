import Form from "@/components/auth/form";
import { useRouter } from "next/navigation";

export default function SignUp() {

    const router = useRouter();

    const onSubmit = async (email, password) => {
        try {
            let res = await fetch('/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })

            if (res.ok) {
                alert("Sign up Succesfull");
                router.replace('/auth/login')
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    return <Form signin={false} onFormSubmit={onSubmit} />
};
