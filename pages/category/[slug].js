import React from "react";
import { useRouter } from "next/router";

import { getCategories, getCategoryPost } from "../../services";
import { PostCard, Categories, Loader } from "../../components";
import Head from "next/head";

const CategoryPost = ({ posts }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }

    return (
        <div className="container mx-auto px-10 mb-8">
            <Head>
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    {posts.map((post, index) => (
                        <PostCard key={index} post={post.node} />
                    ))}
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-8">
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPost;
export async function getStaticProps({ params }) {
    const data = await getCategoryPost(params.slug);
    return {
        props: {
            posts: data,
        },
    };
}

export async function getStaticPaths() {
    const res = await getCategories();
    const paths = res.map((ele) => ({
        params: {
            slug: `${ele.slug}`,
        },
    }));
    return {
        paths,
        fallback: false,
    };
}
