import React, { useEffect, useState } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../services";
import { motion } from "framer-motion";
import { dropInFromLeft } from "../animations/animations";
import { ReactSortable } from "react-sortablejs";
import Image from "next/image";
const PostWidget = ({ categories, slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if (slug) {
            getSimilarPosts(categories, slug).then((res) =>
                setRelatedPosts(res)
            );
        } else {
            getRecentPosts().then((res) => setRelatedPosts(res));
        }
    }, [slug]);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropInFromLeft}
            className="bg-transparent border-2 rounded-lg p-8 mb-8 "
        >
            <h3 className=" text-center font-semibold text-lg  mb-8 border-b pb-4 ">
                {slug ? "Related Posts" : "Recent Posts"}
            </h3>

            <ReactSortable
                animation={500}
                delayOnTouchStart={true}
                list={relatedPosts}
                ghostClass="gshost"
                setList={setRelatedPosts}
            >
                {relatedPosts?.map((ele, ind) => (
                    <Link href={`/post/${ele.slug}`}>
                        <motion.div
                            drag
                            whileDrag={{
                                scale: 1.5,
                                boxShadow: "0px 10px 16px #222",
                            }}
                            whileTap={{
                                opacity: 1,
                                scale: 1.05,
                                boxShadow: "0px 5px 8px #222",
                                cursor: "grabbing",
                            }}
                            dragConstraints={{
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                            }}
                            dragElastic={0.6}
                            whileHover={{ scale: 1.03 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                            }}
                            key={ind + 1}
                            className="flex h-[72px] relative text-white hover:bg-gray-800/[.8] p-3   bg-gray-600/[.6] rounded-md items-center w-full mb-3"
                        >
                            <div className=" w-12   flex-none">
                                <Image
                                    src={ele.featuredImage?.url}
                                    height={60}
                                    width={60}
                                    alt={ele.title}
                                    className="rounded-full w-full"
                                />
                            </div>
                            <div className="flex   w-full ml-2">
                                <p className="text-blue-500 text-[12.4px] bg-yellow-300 absolute  top-[1.6rem] rounded-br-md rounded-bl-md right-[-1.5rem]  -rotate-90 ">
                                    {moment(ele.createdAt).format(
                                        "MMM DD,YYYY"
                                    )}
                                </p>
                                <p className=" justify-end">{ele.title}</p>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </ReactSortable>
        </motion.div>
    );
};

export default PostWidget;
