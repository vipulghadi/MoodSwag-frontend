import React from "react";
import { useParams } from "react-router-dom";
import Filter from "../components/Filter";
import SearchProducts from "../components/SearchedProducts/SearchProducts";
import Pagination from "../components/Pagination";
function SearchPage() {
  const { query } = useParams();
  return (
    <div className="w-full sm:px-5 px-2 sm:flex mt-[90px] h-[1200px]">
      <div className="filters hidden sm:block w-1/5" >
      <Filter/>
      </div>
      <div className="search-items sm:w-4/5 w-full  h-[1000px] ">
      <SearchProducts/>
      <Pagination/>
      </div>
    </div>
  );
}

export default SearchPage;
