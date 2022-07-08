import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
    const { data, isLoading } = trpc.useQuery(["websites-all"]);
    if (isLoading || !data) return <div> ...Loading</div>;
    return (
        <div>
            {data?.map((website) => (
                <a href={`/sites/${website.urlSlug}`}>{website.siteUrl}</a>
            ))}
        </div>
    );
};

export default Home;
