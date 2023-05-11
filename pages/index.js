import Head from "next/head";
import Categories from "../components/Categories";
import PostCard from "../components/PostCard";
import PostWidget from "../components/PostWidget";
import { getPosts } from "../services";
import FeaturedPost from "../sections/FeaturedPost";
import { Loader } from "../components";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Adsense } from "@ctrl/react-adsense";
export default function Home({ posts }) {
    const router = useRouter();
    useEffect(() => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/service-worker.js");
        }
    }, []);

    if (router.isFallback) {
        <Loader />;
    }
    return (
        <div
            data-scroll-section
            className="container mx-auto px-10 mb-8 z-0   "
        >
            <Head>
                <title>Lyceum Article</title>
                <link rel="icon" href="/lyceum-logo/default.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <div>
                <FeaturedPost />
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 col-span-1 ">
                    {posts.map((ele, ind) => (
                        <div key={ind + 1}>
                            <PostCard post={ele.node} />
                        </div>
                    ))}
                </div>

                <div className="col-span-1 lg:col-span-4  ">
                    <div className="relative lg:sticky  top-8">
                        <PostWidget />
                        <Adsense
                            client="ca-pub-7640562161899788"
                            slot="7259870550"
                            style={{ display: "block" }}
                            className={``}
                            layout="in-article"
                            format="fluid"
                        />
                        <Categories />
                        {/* <Loader /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export const getStaticProps = async () => {
    const posts = (await getPosts()) || [];

    return {
        props: {
            posts,
        },
    };
};
