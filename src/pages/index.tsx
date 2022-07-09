import type { NextPage } from "next";
import HeaderNavigation from "../components/HeaderNavigation";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
    const { data, isLoading } = trpc.useQuery(["websites-all"]);
    if (isLoading || !data) return <div> ...Loading</div>;
    return (
        <section>
            <HeaderNavigation />
            <ul>
                {data?.map((website) => (
                    <li key={website.id}>
                        {" "}
                        <a href={`/sites/${website.urlSlug}`}>
                            {website.siteUrl}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Home;
