import React from "react";
import { useGLobalContext } from "../Context/Context";
import Loading from "./Loading";

const Stories = () => {
  const { hits, isLoading } = useGLobalContext();
  if (isLoading) {
    return (
      <div className="h-screen relative top-40">
        <Loading />
      </div>
    );
  }

  if (hits.length < 1) {
    return <div className="h-screen relative top-40">Query Not Available</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="w-[90%] space-y-5 py-8">
        {hits.map((currNews) => {
          const { author, title, num_comments, url } = currNews;
          // console.log("curr", hits);
          console.log("lenght", hits.length);

          return (
            <div className="bg-white px-5 py-3 rounded-xl">
              <div className="flex flex-col justify-around h-36">
                {title ? (
                  <h1 className="text-xl">{title}</h1>
                ) : (
                  <h1 className="text-xl">Title is not available</h1>
                )}
                <div className="flex">
                  <p className="pr-3 mr-3 border-r-2">By {author}</p>
                  <p>{num_comments} comments</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-red-300">
                    <a href={url}>Read more</a>
                  </p>

                  {/* <button>Remove</button> */}
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
