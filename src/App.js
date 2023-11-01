import React from "react";
import Stories from "./Component/Stories";
import Search from "./Component/Search";
import Pagination from "./Component/Pagination";

const App = () => {
  return (
    <div>
      <Search />
      <Pagination />
      <Stories />
    </div>
  );
};

export default App;
