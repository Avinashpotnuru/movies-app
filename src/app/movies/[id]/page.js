"use client";

//next imports

import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

import {
  useGetMovieByIdQuery,
  useGetMovieDetailsCastQuery,
  useGetMovieVideosQuery,
} from "@/store/api/restApis";

//import components
const MovieDetails = dynamic(() => import("@/components/MovieDetails"), {
  ssr: false,
});

const MoviesDetailsPage = () => {
  const params = useParams();
  const id = params.id;

  const { data } = useGetMovieByIdQuery({ id });
  const { data: castData } = useGetMovieDetailsCastQuery({ id });
  const { data: movieVideos } = useGetMovieVideosQuery({ id });

  const trailer = movieVideos?.results?.filter((e) => e.type == "Trailer");

  return (
    <div>
      <MovieDetails
        {...data}
        cast={castData?.cast}
        crew={castData?.crew}
        videos={trailer}
      />
    </div>
  );
};

export default MoviesDetailsPage;
