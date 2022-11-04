import React, { useEffect, useState } from "react";
import moment from "moment";
import parse from "html-react-parser";
import { getComment } from "../services";
const Comments = ({ slug }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComment(slug).then((res) => setComments(res));
    }, []);

    return (
        <>
            {comments?.length > 0 && (
                <div className="bg-black bg-opacity-20 shadow-lg rounded-lg p-8 pb-12 mb-8">
                    <h3 className="text-3xl mb-8 font-semibold border-b pb-4 text-center">
                        {comments.length} Comments
                    </h3>
                    {comments.map((comment) => (
                        <div
                            key={comment?.createdAt}
                            className="border-b mb-4 pb-4"
                        >
                            <p className="mb-4">
                                <span className="text-white font-semibold">
                                    {comment?.name}
                                </span>{" "}
                                <span className="text-blue-500 ml-2 mr-2">
                                    {" "}
                                    on
                                </span>
                                <span className="text-blue-300">
                                    {moment(comment?.createdAt).format(
                                        "MMM DD, YYYY"
                                    )}
                                </span>
                            </p>
                            <p className="w-full text-green-400 whitespace-pre-line font-semibold">
                                {parse(comment?.comment)}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Comments;
