//next imports
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
//react imports
import { useEffect, useState } from "react";

import { useAddFavoritesMutation } from "@/store/api/restApis";

//third party packages
import { RxCross2 } from "react-icons/rx";
import { MdOutlineFavorite } from "react-icons/md";

function MoviesCard({
  title,
  poster_path,
  id,
  release_date,
  popularity,
  vote_average,
  addFav,
  delFav,
}) {
  const imagePath =
    "https://image.tmdb.org/t/p/w500/https://image.tmdb.org/t/p/w500";

  const [toggle, setToggle] = useState("");

  const [addFavorite] = useAddFavoritesMutation();

  const path = usePathname();
  useEffect(() => {}, [addFavorite]);

  return (
    <div className="bg-white min-h-[540px] shadow-md rounded m-3">
      <Link href={`/movies/${id}`}>
        <div className="h-3/4 w-full">
          <Image
            height={700}
            width={700}
            className="w-full h-full  rounded-t"
            src={`${imagePath}${poster_path}
        `}
            alt={`image${id}`}
          />
        </div>
      </Link>

      <div className="w-full h-1/4 p-3">
        <div className="flex justify-between  items-center w-full">
          <h1 className=" hover:text-yellow-600 text-gray-700">
            <span className="text-base font-semibold uppercase tracking-wide ">
              {title}
            </span>
          </h1>

          {path === "/" && (
            <div
              className=""
              onClick={() => {
                addFav(id);
                setToggle(id);
                addFavorite({
                  media_type: "movie",
                  media_id: id,
                  favorite: true,
                });
              }}
            >
              {id === toggle ? (
                <MdOutlineFavorite size={20} className="text-red-500 " />
              ) : (
                <MdOutlineFavorite
                  onClick={() => delFav(id)}
                  size={20}
                  className=""
                />
              )}
            </div>
          )}

          {path === "/favorite" && (
            <div
              className=""
              onClick={() => {
                addFavorite({
                  media_type: "movie",
                  media_id: id,
                  favorite: false,
                });
                setTimeout(() => {
                  window.location.reload();
                }, 10);
              }}
            >
              <RxCross2 />
            </div>
          )}
        </div>

        <p className="text-gray-600 text-sm leading-5 mt-1">
          Release-date:{release_date}
        </p>
        <p className="text-gray-600 text-sm leading-5 mt-1">
          Popularity :
          <span className="text-green-500 font-bold">{popularity}</span>
        </p>
        <p className="text-gray-600 text-sm leading-5 mt-1">
          Rating :
          <span className="text-red-500 font-bold">{vote_average}/10</span>
        </p>
      </div>
    </div>
  );
}

export default MoviesCard;
