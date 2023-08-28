"use client";

//next imports

import { useParams } from "next/navigation";

import { useGetSearchMoviesQuery } from "@/store/api/restApis";

//import components

import MoviesSearch from "@/components/MovieSearch";

const SearchMovies = () => {
  const params = useParams();

  const searchInput = params.name;

  const { data } = useGetSearchMoviesQuery({ searchInput });

  const searchRes = data?.results;

  return (
    <div>
      <MoviesSearch searchRes={searchRes} />
    </div>
  );
};

export default SearchMovies;
