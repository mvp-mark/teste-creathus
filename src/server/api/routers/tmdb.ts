import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "server/api/trpc";
import axios from "axios";
import { env } from "env.mjs";
import {
  findOne,
  getAllLikedMoviesByUser,
  getMovie,
  likeMovie,
  usersLikedMovie,
} from "server/services/movies.service";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres?: Genres[];
}

interface NowPlayingResponse {
  dates?: {
    maximum: Date;
    minimum: Date;
  };
  page: number;
  results: Movie[];
}
interface Genres {
  id: number;
  name: string;
}

export const tmdbRouter = createTRPCRouter({
  now_playing: publicProcedure.query(async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing",
      {
        params: {
          api_key: env.TMDB_KEY,
          language: "pt-BR",
          page: 1,
          region: "br",
        },
      }
    );
    const data = (await response.data) as NowPlayingResponse;
    return data.results;
  }),

  search: publicProcedure
    .input(z.object({ search: z.string() }))
    .query(async ({ input }) => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            api_key: env.TMDB_KEY,
            language: "pt-BR",
            query: input.search,
            page: 1,
            region: "br",
          },
        }
      );
      const data = (await response.data) as NowPlayingResponse;
      return data.results;
    }),

  findMovie: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      return await getMovie(+input.id);
    }),

  saveLike: protectedProcedure
    .input(z.object({ movieId: z.number(), userId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const movie = await findOne(input.movieId);

      // create a like
      const like = await likeMovie(input.userId, movie);

      return like;
    }),

  getLikedMovies: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input }) => {
      return await getAllLikedMoviesByUser(input.userId);
    }),

  getUsersWhoLiked: protectedProcedure
    .input(z.object({ movieId: z.number() }))
    .query(async ({ input }) => {
      return await usersLikedMovie(input.movieId);
    }),
});
