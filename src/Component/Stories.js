import React, { useEffect } from "react";
import { useGLobalContext } from "../Context/Context";

const Stories = () => {
  const { hits } = useGLobalContext();
  return (
    <div className="flex justify-center">
      <div className="w-[90%] space-y-5 py-8">
        {hits.map((currNews) => {
          const { author, title, num_comments } = currNews;
          return (
            <div className="bg-white px-5 py-3 rounded-xl">
              <div className="flex flex-col justify-around h-36">
                <h1 className="text-xl">{title}</h1>
                <div className="flex">
                  <p className="pr-3 mr-3 border-r-2">By {author}</p>
                  <p>{num_comments} comments</p>
                </div>
                <div className="flex justify-between">
                  <p>Read more</p>
                  <button>Remove</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stories;
