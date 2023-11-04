import React from "react";
import { useGLobalContext } from "../Context/Context";

const Pagination = () => {
  const { page, nbPages, prevPage, nextPage } = useGLobalContext();
  console.log(page, "p");

  return (
    <div className="flex">
      <button
        className="bg-black text-white px-3 py-1"
        onClick={() => prevPage()}
      >
        PREV
      </button>
      <p>
        {page} of {nbPages}
      </p>
      <button
        className="bg-black text-white px-3 py-1"
        onClick={() => nextPage()}
      >
        NEXT
      </button>
    </div>
  );
};

export default Pagination;
