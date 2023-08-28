//next imports

import Image from "next/image";
import Link from "next/link";

const SearchMovieCard = ({
  poster_path,
  id,
  title,
  release_date,
  overview,
  vote_average,
}) => {
  const imagePath =
    "https://image.tmdb.org/t/p/w500/https://image.tmdb.org/t/p/w500";

  return (
    <div className=" rounded-md bg-gray-800 shadow-lg my-10">
      <Link href={`/movies/${id}`}>
        <div className="flex flex-col md:flex  md:flex-row px-4 leading-none max-w-4xl">
          <div className="flex-none  ">
            <Image
              height={700}
              width={700}
              className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 "
              src={`${imagePath}${poster_path}`}
              alt={`image${id}`}
            />
          </div>

          <div className="flex-col text-gray-300">
            <p className="pt-4 text-2xl font-bold">
              {title} ({release_date.slice(0, 4)})
            </p>
            <hr className="hr-text" data-content="" />

            <p className=" px-4 my-4 text-sm text-left">{overview}</p>

            <p className="flex text-md px-4 my-2">
              Rating:{parseFloat(vote_average).toFixed(2)}/10
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchMovieCard;
