import React from "react";
import { useGLobalContext } from "../Context/Context";

const Search = () => {
  const { query, searchPost } = useGLobalContext();
  return (
    <div className="py-5">
      <form action="">
        <input
          className="pl-3 py-2 w-72 rounded-md"
          placeholder="search here"
          type="text"
          value={query}
          onChange={(e) => searchPost(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
