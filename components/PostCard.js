import React from "react";
import moment from "moment";
import Link from "next/link";
import { motion } from "framer-motion";
import { dropInFromBottom } from "../animations/animations";
const PostCard = ({ post }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.031 }}
            viewport={{ once: true }}
            exit="exit"
            className=" p-4 drop-shadow-2xl transition-all duration-300 hover:-translate-y-1 rounded-lg border-2  lg:p-8 pb-12 mb-8 bg-transparent "
        >
            <div className="relative overflow-hidden drop-shadow-xl p-4 shadow-white pb-80 mb-6 ">
                <img
                    src={post.featuredImage?.url}
                    alt={post.title}
                    className="h-80 w-full object-cover absolute object-top shadow-lg rounded-t-lg lg:rounded-lg "
                />
            </div>
            <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
                <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </h1>
            <div className="block lg:flex text-center items-center justify-center mb-8 w-full ">
                <div className="flex items-center justify-center mb-4 mr-8 lg:mb-0 lg:w-auto">
                    <img
                        src={post.author.photo.url}
                        alt={post.author.name}
                        height="30px"
                        width="30px"
                        className="align-middle rounded-full "
                    />
                    <p className="inline align-middle text-white ml-2 text-lg">
                        {post.author.name}
                    </p>
                </div>
                <div className="text-blue-400 font-midume flex flex-row  justify-center">
                    <svg
                        className="w-6 h-7 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                    </svg>
                    <span className="mt-1">
                        {moment(post.createdAt).format("MMM DD,YYYY")}
                    </span>
                </div>
            </div>
            <p className="text-center text-lg  text-yellow-50 px-4 lg:px-20 mb-8">
                {post.excerpt}
            </p>
            <div className="text-center">
                <Link href={`/post/${post.slug}`}>
                    <motion.span
                        whileHover={{ scale: 1.1 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                        }}
                        className="     cursor-pointer inline-block bg-blue-500 py-2 px-5 rounded-full text-white"
                    >
                        Continue Reading
                    </motion.span>
                </Link>
            </div>
        </motion.div>
    );
};

export default PostCard;
