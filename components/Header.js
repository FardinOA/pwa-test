import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCategories } from "../services";
import { CgMenu } from "react-icons/cg";
import { RiCloseCircleFill } from "react-icons/ri";

import AnimatedLogo from "./AnimatedLogo";
import { motion } from "framer-motion";

const Header = () => {
    const [categories, setCategories] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        getCategories().then((res) => setCategories(res));
    }, []);
    return (
        <div className="container mx-auto px-10 mb-8  ">
            <div className=" w-full flex justify-between border-white py-8">
                <div className=" block ">
                    <Link href="/">
                        <span
                            data-scroll
                            data-scroll-direction="horizontal"
                            data-scroll-speed="3"
                            className="cursor-pointer font-bold text-4xl test-white "
                        >
                            <AnimatedLogo />
                        </span>
                    </Link>
                </div>
                <motion.div
                    animate={modal ? "open" : "closed"}
                    variants={{
                        open: { opacity: 1, x: 0 },
                        closed: {
                            opacity: 0,
                            x: "-100%",
                            animationDuration: 200,
                        },
                    }}
                    className={`    bg-white
                      absolute
                      inset-x-[8%]
                      top-[7rem]
                      z-[999999]
                      flex
                      flex-col
                      rounded-[18px]
                       active:scale-100
                       transition
                       ease-out
                       duration-600
                        shadow-xl  
                       lg:!border-none
                      p-[4%]
                      px-[3%]
                      lg:static
                      lg:!inset-x-[0%]
                      lg:!top-[0%]
                      lg:z-[99999]
                      lg:w-[60%]
                      lg:flex-row
                      lg:justify-around
                      lg:rounded-[0px]
                       
                      lg:p-[0%]
                      lg:px-[0%] ${!modal && "hidden    lg:contents"}`}
                >
                    {categories.map((ele, ind) => (
                        <Link key={ind + 1} href={`/category/${ele.slug}`}>
                            <span
                                className="inline-flex 
                          items-center 
                          p-[8px_2px] 
                           
                          text-lg 
                           
                          capitalize 
                          font-[700]
                          leading-[1.22em] 
                          text-blue 
                          transition-all 
                          duration-300 
                          ease-in-out 
                          hover:text-yellow-500
                           hover:-translate-y-1
                          "
                            >
                                {ele.name}
                            </span>
                        </Link>
                    ))}
                </motion.div>
                <motion.div
                    whileTap={{
                        opacity: 1,
                        scale: 1.05,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                    }}
                    className={`float-right lg:hidden `}
                >
                    {!modal ? (
                        <CgMenu
                            color="white"
                            onClick={() => setModal(!modal)}
                            className={`cursor-pointer `}
                            size={40}
                        />
                    ) : (
                        <RiCloseCircleFill
                            color="white"
                            onClick={() => setModal(!modal)}
                            className={`cursor-pointer `}
                            size={40}
                        />
                    )}
                </motion.div>
            </div>
            <hr className="style18" />
        </div>
    );
};

export default Header;
