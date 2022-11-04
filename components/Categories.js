import React, { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import Link from "next/link";
import { getCategories } from "../services";
import { motion } from "framer-motion";
import { dropInFromLeft, dropInFromRight } from "../animations/animations";
const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((res) => setCategories(res));
    }, []);
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropInFromLeft}
            className="bg-transparent border-2 rounded-lg p-8 mb-8 pb-12"
        >
            <h3 className=" text-center font-semibold text-[2rem] text-white mb-8 border-b pb-4 ">
                Categories
            </h3>
            <ReactSortable
                animation={500}
                delayOnTouchStart={true}
                list={categories}
                ghostClass="gshost"
                setList={setCategories}
            >
                {categories?.map((ele, ind) => (
                    <Link
                        className="flex items-center "
                        key={ind + 1}
                        href={`/category/${ele.slug}`}
                    >
                        <motion.span
                            drag
                            whileDrag={{
                                scale: 1.02,
                                boxShadow: "0px 10px 16px #222",
                            }}
                            whileTap={{
                                opacity: 1,
                                scale: 1.03,
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
                            className="cursor-grab text-white hover:bg-gray-800/[.8]   bg-gray-600/[.6] rounded-md  block w-full  p-3 mb-3 font-semibold"
                        >
                            {" "}
                            {ele.name}
                        </motion.span>
                    </Link>
                ))}
            </ReactSortable>
        </motion.div>
    );
};

export default Categories;
