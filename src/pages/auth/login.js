import Form from "@/components/auth/form";
import { getSession, signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";

export default function SignIn() {

  const router = useRouter();

  const onSubmit = async (email, password) => {
    const data = await signIn('credentials', { redirect: false, email, password })
    if (data.ok) {
      router.push('/profile')
    }

    else {
      alert("Failed to Login")
    }
    console.log('data', data);
  }

  return <Form signin={true} onFormSubmit={onSubmit} />
};

export async function getServerSideProps({ req }) {

  const session = await getSession({ req });
  if (session) {
    return {
      redirect: {
        destination: '/profile',
        permanent: false
      }

    }
  }

  return {
    props: {
      session
    }
  }

}