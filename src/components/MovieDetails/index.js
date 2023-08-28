"use client";

//next imports
import Image from "next/image";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

//import third party packages
import ReactPlayer from "react-player";

//imports from store
import {
  useGetSimilarMoviesQuery,
  useGetMovieVideosQuery,
  useGetPersonDetailsQuery,
} from "@/store/api/restApis";

import Link from "next/link";

//import components
import CastCard from "../CastCard";

const VideoCard = dynamic(() => import("../VideoCard"), {
  ssr: false,
});
import SimilarMovieCard from "../SimilarMovieCard";

const MovieDetails = (props) => {
  const cast = props?.cast;
  const crew = props?.crew;

  const trailerVideos = props?.videos;
  var key;
  if (trailerVideos) {
    key = props?.videos[0]?.key;
  }

  const params = useParams();
  const id = params.id;

  const { data } = useGetSimilarMoviesQuery({ id });

  const { data: reviews } = useGetPersonDetailsQuery();

  const similarMovies = data?.results;

  const { data: videosData } = useGetMovieVideosQuery({ id });

  const videos = videosData?.results;

  const imagePath =
    "https://image.tmdb.org/t/p/w500/https://image.tmdb.org/t/p/w500";

  return (
    <div className="w-full sm:pt-12 md:pt-0  ">
      <div
        className={`w-full ${
          props.backdrop_path && "md:bg-purple-400"
        }    rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10   h-auto  md:h-[70vh] lg:h-[90vh] flex justify-center items-center  relative   `}
      >
        <Image
          src={`${
            props.backdrop_path
              ? `${imagePath}${props.backdrop_path}`
              : "/backgroundImage.jpg"
          }`}
          height={100}
          width={1000}
          className="w-full h-full hidden md:block object-center absolute -z-10  "
          alt="image"
        />
        <div className="sm:w-[90%] lg:w-[80%] md:h-[60%]   flex flex-col md:flex-row md:justify-around  sm:items-center space-y-4 md:space-y-0  ">
          <div className="md:w-[50%] md:h-full  flex justify-center items-center">
            <Image
              height={300}
              width={400}
              src={`${
                props.poster_path
                  ? `${imagePath}${props.poster_path}`
                  : "/noimage.png"
              }`}
              className="w-[300px] h-[320px]  md:h-full md:w-auto sm:hidden"
              alt="image"
            />
            <div className="hidden w-full sm:block">
              {key ? (
                <ReactPlayer
                  controls={true}
                  height={300}
                  width={400}
                  light={
                    <Image
                      height={300}
                      width={400}
                      src={`${imagePath}${props.poster_path}`}
                      className="w-[300px] h-[340px] md:h-[400px] mb-6"
                      alt="image"
                    />
                  }
                  url={`https://youtu.be/${key}`}
                />
              ) : (
                <Image
                  height={300}
                  width={400}
                  src={`${imagePath}${props.poster_path}`}
                  className="w-[300px] h-[340px] mb-6 "
                  alt="image"
                />
              )}
            </div>
          </div>
          <div className=" md:w-[50%] md:min-h-[80%] md:bg-purple-900  md:bg-clip-padding  md:backdrop-filter  md:backdrop-blur-sm  md:bg-opacity-50  text-blue-900 md:border md:border-gray-100 md:flex md:flex-col md:justify-around  px-4 space-y-2 md:space-y-0 p-3">
            <h1 className="text-white text-2xl font-extrabold italic ">
              {props?.title}
            </h1>
            <div className="flex flex-wrap">
              <span className="text-white font-bold   text-base">Genres:</span>{" "}
              <div className="  font-semibold  text-green-500 flex-wrap text-base">
                {props?.genres?.map((e) => e.name).join(",")}
              </div>
            </div>

            <div>
              <h1 className="text-white  text-base">
                <span className=" font-bold text-base">Run time : </span>
                {`${Math.floor(props?.runtime / 60)}h ${props?.runtime % 60}m`}
              </h1>
              <h1 className="text-white  text-base">
                <span className=" font-bold text-base">languages : </span>
                {props?.spoken_languages?.map((e) => e.english_name).join(",")}
              </h1>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Overview :</h1>
              <h1 className="text-white text-base">{props?.overview}</h1>
            </div>

            <div className="flex flex-col justify-start items-center space-y-3 sm:space-y-0 sm:flex-row sm:justify-around sm:w-full ">
              <h1 className="text-green-500 font-bold">
                <span className=" text-white font-bold text-base">
                  Release_date :
                </span>{" "}
                {props?.release_date}
              </h1>
              <h1 className="text-green-500 font-bold">
                <span className=" text-white font-bold text-base">Rating</span>{" "}
                : {props?.vote_average}
              </h1>
            </div>
            <div className="flex justify-end items-center my-4">
              <Link href={`/images/${id}`}>
                <button class="bg-transparent text-white py-2 px-4 rounded-md flex items-center space-x-2 transition duration-300 ease-in-out hover:border-2">
                  More Images
                  <svg
                    class="w-4 h-4 transform transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {videos?.length && (
        <>
          <h1 className=" font-bold text-white my-3 text-2xl  text-center">
            Videos
          </h1>
          <div className="flex flex-col  overflow-x-auto w-full p-3">
            <div className="flex  space-x-4  ">
              {videos?.slice(0, 10).map((e, idx) => (
                <VideoCard key={idx} videos={e} />
              ))}
            </div>
          </div>
        </>
      )}

      {similarMovies?.length && (
        <>
          <h1 className=" font-bold text-white my-3 text-2xl  text-center">
            Similar Movies
          </h1>
          <div className="flex flex-col  overflow-x-auto w-full p-3">
            <div className="flex  space-x-4  ">
              {similarMovies?.map((e, idx) => (
                <SimilarMovieCard key={idx} {...e} />
              ))}
            </div>
          </div>
        </>
      )}

      <h1 className="font-bold text-white my-3 text-2xl  text-center">Cast</h1>
      <div className="flex flex-col  overflow-x-auto w-full  p-3">
        <div className="flex  space-x-4 pt-4 ">
          {cast?.map((e, idx) => (
            <CastCard key={idx} {...e} />
          ))}
        </div>
      </div>
      <h1 className=" font-bold text-white my-3 text-2xl  text-center">Crew</h1>
      <div className="flex flex-col  overflow-x-auto w-full p-3">
        <div className="flex  space-x-4  ">
          {crew?.map((e, idx) => (
            <CastCard crew_name={"crew"} key={idx} {...e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
