import React from "react";
import Stories from "./Component/Stories";
import Search from "./Component/Search";
import Pagination from "./Component/Pagination";
import { useGlobalContext } from "./Context/Context";

const App = () => {
  const data = useGlobalContext();
  return (
    <div>
      <h1>{data}</h1>
      <Search />
      <Pagination />
      <Stories />
    </div>
  );
};

export default App;
