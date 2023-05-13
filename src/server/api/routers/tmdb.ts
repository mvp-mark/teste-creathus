import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "server/api/trpc";
import axios from "axios";
import { env } from "process";

export const tmdbRouter = createTRPCRouter({
  now_playing: publicProcedure.query(async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing",
      {
        params: {
          api_key: env.TMDB_API_KEY,
          language: "pt-BR",
          page: 1,
          region: "br",
        },
      }
    );
    const data = await response.data();
    return data;
  }),
});
