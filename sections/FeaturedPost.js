import React, { useEffect, useState } from "react";
import { getFeaturePost } from "../services";
// import Carousel from "react-material-ui-carousel";
import Link from "next/link";
import Carousel from "framer-motion-carousel";
const FeaturedPost = () => {
    const [featuredPost, setFeaturedPost] = useState([]);

    useEffect(() => {
        getFeaturePost().then((res) => setFeaturedPost(res));
    }, []);

    return (
        <>
            <h3 className="text-white font-bold text-4xl text-center mb-4">
                Featured Posts
            </h3>
            <div className=" ">
                <Carousel className="" interval={3000} renderDots={false}>
                    {featuredPost.map((post) => (
                        <div className="mb-8 pb-4 mt-8">
                            <img
                                draggable="false"
                                src={post.featuredImage?.url}
                                alt={post.title}
                                className=" h-80 w-full object-cover  object-top  "
                            />
                            <Link
                                href={`/post/${post.slug}`}
                                className="text-black ml-8 "
                            >
                                <h2 className="   text-white text-center font-semibold text-xl cursor-pointer">
                                    {post.title} <span>By</span>{" "}
                                    <span className="text-black ml-8">
                                        {post.author.name}
                                    </span>
                                </h2>
                            </Link>
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    );
};

export default FeaturedPost;
