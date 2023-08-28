//next imports
import Image from "next/image";
import Link from "next/link";
const SearchTabComponent = ({ title, poster_path, id, tabHandler }) => {
  const imagePath =
    "https://image.tmdb.org/t/p/w500/https://image.tmdb.org/t/p/w500";
  return (
    <Link href={`/movies/${id}`}>
      <div
        onClick={() => tabHandler(false)}
        className="w-full flex justify-between items-center bg-gray-700 py-2 px-3 min-h-10"
      >
        <div className="w-[30%]">
          <Image
            height={500}
            width={500}
            className="h-[40px] w-[30px] overflow-hidden shadow-lg "
            src={`${imagePath}${poster_path}`}
            alt="Bonnie image"
          />
        </div>

        <h1 className="text-center text-[10px] font-bold text-white w-[70%]">
          {title}
        </h1>
      </div>
    </Link>
  );
};

export default SearchTabComponent;
