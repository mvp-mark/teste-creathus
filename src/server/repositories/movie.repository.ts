import { prisma } from "server/db";
import { Movie } from "../entities/movie.entity";

//@repository()
export const movieRepository = {
  async createMovie(movie: Movie) {
    return await prisma.movie.create({
      data: {
        title: movie.title,
        overview: movie.overview,
        releaseDate: movie.releaseDate,
        adult: movie.adult,
        popularity: movie.popularity,
        video: movie.video,
        movieId: movie.movieId,
        voteAverage: movie.voteAverage,
        voteCount: movie.voteCount,
        originalTitle: movie.originalTitle,
        originalLanguage: movie.originalLanguage,
        backdrop: movie.backdrop,
        description: movie.overview,
        poster: movie.poster,
      },
    });
  },

  async findMany(userId?: string, movieId?: number) {
    return await prisma.movie.findMany({
      where: {
        LikedMovie: {
          some: {
            userId: userId,
            movieId: movieId,
          },
        },
      },
    });
  },

  async createLikedMovie(userId: string, movieId: number) {
    return await prisma.likedMovie.create({
      data: {
        userId: userId,
        movieId: movieId,
      },
    });
  },

  async deleteLikedMovie(userId: string, movieId: number) {
    return await prisma.likedMovie.delete({
      where: {
        userId_movieId: {
          userId: userId,
          movieId: movieId,
        },
      },
    });
  },

  async findOne(movieId: number) {
    return await prisma.movie.findUnique({
      where: {
        movieId,
      },
    });
  },
};
