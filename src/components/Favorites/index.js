"use client";
//hooks
import React, { useEffect } from "react";

//next imports
import { usePathname } from "next/navigation";

//import components
import MoviesCard from "../MoviesCard";

//import from store
import { useGetFavoriteMoviesQuery } from "@/store/api/restApis";

const Favorites = () => {
  const path = usePathname();

  const { data } = useGetFavoriteMoviesQuery();

  const delFav = (e) => {};

  return (
    <div>
      <h1 className="text-4xl text-white font-extrabold mb-3 ">
        Favorites Movies
      </h1>
      <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-full  md:gap-5 my-7">
        {data?.results.map((val, idx) => (
          <MoviesCard
            addFav={() => {}}
            delFav={delFav}
            path={path}
            key={idx}
            {...val}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
