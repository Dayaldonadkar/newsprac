import React from "react";
import { useGLobalContext } from "../Context/Context";

const Search = () => {
  const { query, searchPost } = useGLobalContext();
  return (
    <div className="py-10">
      <form action="">
        <input
          className="pl-3"
          type="text"
          value={query}
          onChange={(e) => searchPost(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
