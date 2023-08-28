//redux imports

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASEURL;
const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjI1NjI4MzQ5ZDEyYTM2NjBlOGU2MzEyOGY3YWFhNCIsInN1YiI6IjY0YzhlMzc1MWZhMWM4MDEwZjRkY2M5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GnxYB_a56IRwIqbctVsCAFOnuMa3aMrE01vLubawd-o";

const restApi = createApi({
  reducerPath: "restApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,

    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${API_KEY}`);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    addFavorites: builder.mutation({
      query: (data) => ({
        url: `account/20236627/favorite`,
        method: "POST",

        body: data,
      }),
    }),

    getMovies: builder.query({
      query: (data) => `movie/${data.tab}?page=${data.pageId}`,
    }),
    getMovieById: builder.query({
      query: (data) => `movie/${data.id}`,
    }),
    getMovieDetailsCast: builder.query({
      query: (data) => `movie/${data.id}/credits`,
    }),
    getMovieVideos: builder.query({
      query: (data) => `movie/${data.id}/videos`,
    }),
    getSearchMovies: builder.query({
      query: (data) => `search/movie?query=${data.searchInput}`,
    }),
    getSimilarMovies: builder.query({
      query: (data) => `movie/${data.id}/similar`,
    }),
    getMovieReview: builder.query({
      query: (data) => `movie/${data.id}/watch/providers`,
    }),
    getMovieImages: builder.query({
      query: (data) => `movie/${data.id}/images`,
    }),
    getPersonDetails: builder.query({
      query: (data) => `person/${data.id}`,
    }),
    getPersonImages: builder.query({
      query: (data) => `person/${data.id}/images`,
    }),
    getHeroMovies: builder.query({
      query: (data) => `person/${data.id}/combined_credits`,
    }),
    getFavoriteMovies: builder.query({
      query: (data) => `account/20236627/favorite/movies`,
    }),
  }),
});

export const {
  useAddFavoritesMutation,
  useGetMoviesQuery,
  useGetMovieByIdQuery,
  useGetMovieDetailsCastQuery,
  useGetMovieVideosQuery,
  useGetSearchMoviesQuery,
  useGetSimilarMoviesQuery,
  useGetMovieReviewQuery,
  useGetPersonDetailsQuery,
  useGetPersonImagesQuery,
  useGetMovieImagesQuery,
  useGetFavoriteMoviesQuery,
  useGetHeroMoviesQuery,
} = restApi;

export default restApi;
