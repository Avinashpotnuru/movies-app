"use Client";

//next imports

import Link from "next/link";
import { usePathname } from "next/navigation";

//react imports
import React, { useState } from "react";
import { useGetSearchMoviesQuery } from "@/store/api/restApis";
import { useDispatch, useSelector } from "react-redux";

import { searchHandler } from "@/store/slice/tabsSlice";

//import components
import SearchTabComponent from "../SearchTabComponent";

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchInput, setInput] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [tabToggle, setToggle] = useState(false);
  const path = usePathname();

  const submitHandler = () => {
    setSearchResult(searchInput);
    dispatch(searchHandler(searchInput));
    setToggle(false);
    setInput("");
  };

  const { data } = useGetSearchMoviesQuery({ searchInput });
  const searchData = data?.results;

  return (
    <div className="bg-slate-600 h-[24vh] sm:h-[10vh] flex flex-col sm:flex sm:flex-row justify-around  items-center fixed top-0 w-full z-10  ">
      <h1 className="text-3xl text-white font-extrabold italic">
        <Link href={"/"}>Movies DB</Link>
      </h1>
      <div className="space-x-4 flex flex-col sm:flex-row items-center">
        <Link href={"/favorite"}>
          <h1
            className={`ml-4 text-white font-bold ${
              path === "/favorite" ? "underline pb-3" : ""
            } `}
          >
            Favorite
          </h1>
        </Link>
        {/* <Link href={"/top-headlines"}>
          <h1
            className={`ml-4  ${
              path === "/top-headlines" ? "font-bold text-white" : ""
            }`}
          >
            Headlines
          </h1>
        </Link> */}
        <div className="flex flex-col space-y-2 sm:space-y-0  justify-center items-center sm:flex-row">
          <div className="relative flex">
            <input
              type="text"
              onChange={(e) => {
                setInput(e.target.value);
                setToggle(true);
              }}
              value={searchInput}
              className="py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Search Movie Name"
            />
            {tabToggle && (
              <div className="bg-gray-800 absolute w-full h-[200px] overflow-hidden overflow-y-auto -bottom-48">
                {searchData.length ? (
                  searchData.map((e, idx) => (
                    <SearchTabComponent
                      tabHandler={() => setToggle()}
                      key={idx}
                      {...e}
                    />
                  ))
                ) : (
                  <h1 className="text-red-500 text-center mt-[80px] my-auto">
                    no results{" "}
                  </h1>
                )}
              </div>
            )}
          </div>
          <Link href={`/search-movies/${searchInput}`}>
            <button
              onClick={submitHandler}
              className="bg-blue-500 text-white py-2 ml-2 px-4 rounded hover:bg-blue-600"
            >
              Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
