import React from "react";
import { getPosts, getPostDetails } from "../../services";
import { useRouter } from "next/router";
import {
    PostDetail,
    Categories,
    PostWidget,
    Author,
    Comments,
    CommentFrom,
    Loader,
} from "../../components";
import Head from "next/head";
const PostDetails = ({ post }) => {
    const router = useRouter();
    if (router.isFallback) {
        <Loader />;
    }
    return (
        <>
            <Head>
                <title>Lyceum Article</title>
                <link rel="icon" href="/details.png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <div data-scroll-section className="container mx-auto px-10 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="col-span-1 lg:col-span-8">
                        <PostDetail post={post} />
                        <Author author={post?.author} />
                        <CommentFrom slug={post?.slug} />
                        <Comments slug={post?.slug} />
                    </div>
                    <div className="col-span-1 lg:col-span-4">
                        <div className="relative lg:sticky top-8">
                            <PostWidget
                                slug={post?.slug}
                                categories={post?.categories?.map(
                                    (ele) => ele.slug
                                )}
                            />
                            <Categories />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostDetails;

export const getStaticProps = async ({ params }) => {
    const data = await getPostDetails(params.slug);

    return {
        props: {
            post: data,
        },
    };
};

export const getStaticPaths = async () => {
    const res = await getPosts();

    const paths = res.map((post) => ({
        params: {
            slug: `${post.node.slug}`,
        },
    }));

    return {
        paths,
        fallback: true,
    };
};
