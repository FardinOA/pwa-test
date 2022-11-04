import React from "react";
import Image from "next/image";
const Author = ({ author }) => {
    return (
        <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
            <div className="absolute   h-full w-full  left-[50%] ml-[-35px]  -top-14">
                <div className="w-[80px] h-[80px]">
                    <Image
                        src={author?.photo.url}
                        alt={author?.name}
                        height={80}
                        width={80}
                        layout="responsive"
                        className=" shadow-md shadow-white w-full rounded-full object-fit "
                    />
                </div>
            </div>

            <h3 className="text-white my-2 text-2xl font-bold">
                {author?.name}
            </h3>
            <p className="text-white text-lg">{author?.bio}</p>
        </div>
    );
};

export default Author;
