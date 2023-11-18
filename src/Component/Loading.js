import React from "react";
import { square } from "ldrs";

square.register();

// Default values shown

const Loading = () => {
  return (
    <div className="">
      <l-square
        size="35"
        stroke="5"
        stroke-length="0.25"
        bg-opacity="0.1"
        speed="1.2"
        color="black"
      ></l-square>
    </div>
  );
};

export default Loading;
