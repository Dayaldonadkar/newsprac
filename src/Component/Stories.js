import React, { useEffect } from "react";
import { useGLobalContext } from "../Context/Context";

const Stories = () => {
  const { hits } = useGLobalContext();
  return (
    <div>
      <h2>
        {hits.map((currNews) => {
          const { author, title, num_comments } = currNews;
          return (
            <div>
              <h1>{title}</h1>
              <div className="flex">
                <p>{author}</p>
                <p>{num_comments} comments</p>
              </div>
              <div className="flex justify-between">
                <p>Read more</p>
                <button>Remove</button>
              </div>
            </div>
          );
        })}
      </h2>
    </div>
  );
};

export default Stories;
