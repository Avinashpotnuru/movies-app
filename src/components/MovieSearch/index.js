"use client";

//import components

import SearchMovieCard from "../SearchMovieCard";

const MoviesSearch = ({ searchRes }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl mt-3  text-white font-extrabold mb-3 ">
        Results
      </h1>
      <div>
        {searchRes?.map((val, idx) => (
          <SearchMovieCard key={idx} {...val} />
        ))}
      </div>
    </div>
  );
};

export default MoviesSearch;
