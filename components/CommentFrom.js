import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import { submitComment } from "../services";
const CommentFrom = ({ slug }) => {
    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef();

    useEffect(() => {
        nameEl.current.value = window.localStorage.getItem("name");
        emailEl.current.value = window.localStorage.getItem("email");
    }, []);

    const handelCommentSubmit = () => {
        setError(false);
        const { value: comment } = commentEl.current;
        const { value: name } = nameEl.current;
        const { value: email } = emailEl.current;
        const { checked: storeData } = storeDataEl.current;
        if (!comment || !name || !email) {
            setError(true);
            return;
        }
        const commentObj = {
            name,
            email,
            comment,
            slug,
        };
        if (storeData) {
            window.localStorage.setItem("name", name);
            window.localStorage.setItem("email", email);
        } else {
            window.localStorage.removeItem("name", name);
            window.localStorage.removeItem("email", email);
        }

        submitComment(commentObj).then((res) => {
            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000);
        });
    };
    return (
        <div className="bg-black bg-opacity-20 shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-white text-4xl text-center mb-4 font-semibold   pb-4">
                Leave Your Judgement
            </h3>
            <hr className="style18" />
            <div className="grid gird-cols-1 gap-4 mb-4">
                <textarea
                    ref={commentEl}
                    className="text-white font-semibold p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-300 bg-black bg-opacity-40 "
                    placeholder="Comment"
                    name="comment"
                />
            </div>
            <div className="grid gird-cols-1 gap-4 mb-4 lg:grid-cols-2">
                <input
                    ref={nameEl}
                    type="text"
                    className="text-white py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-300 bg-black bg-opacity-40"
                    placeholder="Name"
                    name="name"
                />

                <input
                    type="email"
                    ref={emailEl}
                    className="text-white py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-300 bg-black bg-opacity-40"
                    placeholder="Email"
                    name="email"
                />
            </div>
            <div className="grid gird-cols-1 gap-4 mb-4">
                <div>
                    <input
                        type="checkbox"
                        ref={storeDataEl}
                        id="storeData"
                        name="storeData"
                        value={true}
                    />
                    <label
                        className="text-white cursor-pointer ml-2"
                        htmlFor="storeData"
                    >
                        Save my data for the next time
                    </label>
                </div>
            </div>
            {error && (
                <p className="text-xs text-red-600">All fields are required.</p>
            )}
            <div className="mt-8">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                    }}
                    type="button"
                    onClick={handelCommentSubmit}
                    className="t  hover:bg-indigo-900 inline-block bg-indigo-500 text-white text-lg p-2 rounded-lg w-full cursor-pointer"
                >
                    Post Comment
                </motion.button>
                {showSuccessMessage && (
                    <span className="text-xl float-right font-semibold mt-3 text-green-500 ">
                        Comment Submitted For Review
                    </span>
                )}
            </div>
        </div>
    );
};

export default CommentFrom;
