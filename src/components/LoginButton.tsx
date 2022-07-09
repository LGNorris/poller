import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                Signed in as {session?.user?.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        );
    }
    return (
        <>
            <button
                className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-full border border-black"
                onClick={() =>
                    signIn("github", { callbackUrl: "http://localhost:3000" })
                }
            >
                Sign in
            </button>
        </>
    );
}
