import React from "react";
import { useGLobalContext } from "../Context/Context";

const Pagination = () => {
  const { page, nbPages, prevPage, nextPage } = useGLobalContext();
  console.log(page, "p");

  return (
    <div className="flex space-x-5 items-center">
      <button
        className="bg-black text-white px-3 py-1 rounded-sm"
        onClick={() => prevPage()}
      >
        PREV
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button
        className="bg-black text-white px-3 py-1 rounded-sm"
        onClick={() => nextPage()}
      >
        NEXT
      </button>
    </div>
  );
};

export default Pagination;
