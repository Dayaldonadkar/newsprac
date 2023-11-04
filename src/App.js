import React from "react";
import Stories from "./Component/Stories";
import Search from "./Component/Search";
import Pagination from "./Component/Pagination";

const App = () => {
  return (
    <div className="flex justify-center bg-[#E0F4FF]">
      <div className="flex flex-col items-center">
        <h1 className="pt-5 text-2xl">Hackernews</h1>
        <Search />
        <Pagination />
        <Stories />
      </div>
    </div>
  );
};

export default App;
