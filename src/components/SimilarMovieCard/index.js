//next imports
import Image from "next/image";
import Link from "next/link";

import { imagePath } from "@/utilities";

const SimilarMovieCard = ({ title, id, poster_path }) => {
  return (
    <Link href={`/movies/${id}`}>
      <div className="h-[300px] w-[200px] relative">
        <Image
          height={700}
          width={700}
          className="h-full "
          src={`${poster_path ? `${imagePath}${poster_path}` : "/noimage.png"}`}
          alt={`image${id}`}
        />
        {!poster_path && (
          <h1 className="text-black font-bold text-center my-3 absolute bottom-0 ">
            {title}
          </h1>
        )}
      </div>
    </Link>
  );
};

export default SimilarMovieCard;
