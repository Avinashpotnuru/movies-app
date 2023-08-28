//next imports

import Image from "next/image";
import Link from "next/link";

const CastCard = ({
  name,
  character,
  profile_path,
  crew_name,
  job,
  gender,
  id,
}) => {
  const imagePath =
    "https://image.tmdb.org/t/p/w500/https://image.tmdb.org/t/p/w500";
  return (
    <div className="w-[100px] max-h-[180px] bg-gray-800 flex justify-center my-4 items-center  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col  items-center  w-[100px] my-auto  h-full">
        <div className="max-h-[60%] w-full overflow-hidden">
          <Link href={`/cast/${id}`}>
            {profile_path ? (
              <Image
                height={500}
                width={500}
                className="w-full h-full mb-3 rounded-lg overflow-hidden shadow-lg  object-center"
                src={`${imagePath}${profile_path}`}
                alt={`image${id}`}
              />
            ) : gender == 1 ? (
              <Image
                height={600}
                width={500}
                className="w-full h-full mb-3 overflow-hidden  shadow-lg"
                src="/dummy-image.jpg"
                alt="Bonnie image"
              />
            ) : (
              <Image
                height={600}
                width={500}
                className="w-full h-full mb-3 overflow-hidden  shadow-lg"
                src="/women.jpg"
                alt="Bonnie image"
              />
            )}
          </Link>
        </div>

        <div className=" max-h-[40%] justify-center my-1 overflow-y-auto">
          <h5 className="mb-1 text-sm font-medium text-center text-white dark:text-white">
            {name}
          </h5>
          {!crew_name ? (
            <h1 className="text-xs w-full mx-auto text-center text-white dark:text-gray-400">
              {character}
            </h1>
          ) : (
            <h1 className="text-xs text-center mx-auto w-full text-white justify-center dark:text-gray-400">
              {job}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default CastCard;
