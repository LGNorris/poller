import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";

const WebsitePageContent: React.FC<{ urlSlug: string }> = ({ urlSlug }) => {
    const { data } = trpc.useQuery(["website-by-id", { urlSlug }]);

    if (!data || !data?.urlSlug) {
        return <div>Entry not found</div>;
    }

    return (
        <div className="p-6 min-h-screen w-screen container">
            <Head>
                <title>Website</title>
            </Head>
            <header className="flex w-full justify-between mb-10 items-center">
                <Link href={"/"}>
                    <h1 className="text-4xl font-bold cursor-pointer">
                        OnAVote
                    </h1>
                </Link>
            </header>

            <main className="max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-10 text-center">
                    {data?.siteUrl}
                </h1>
                <div className="flex flex-col gap-4"></div>
            </main>
        </div>
    );
};

const WebsitePage = () => {
    const { query } = useRouter();
    const { urlSlug } = query;

    if (!urlSlug || typeof urlSlug !== "string") {
        return <div>No slug</div>;
    }

    return <WebsitePageContent urlSlug={urlSlug} />;
};

export default WebsitePage;
