import Link from "next/link";

const notFound = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <div className="flex flex-col text-center gap-3">
            <h1 className="text-3xl font-semibold">404</h1>
            <p className="text-2xl">Page not found</p>
            <Link href="/" className="border p-2 mt-3 cursor-pointer">Home</Link>
            </div>
        </div>
    )
}

export default notFound;