import { Movie } from "server/entities/movie.entity";
import { movieRepository } from "server/repositories/movie.repository";
import { Movie as MovieTmdb } from "server/api/routers/tmdb";

export const likeMovie = async (userId: string, movie: Movie) => {
  const movieData = await movieRepository.findOne(movie.movieId);

  if (!movieData) {
    await movieRepository.createMovie(movie);
  }

  const likedMovie = await movieRepository.createLikedMovie(
    userId,
    movie.movieId
  );

  return likedMovie;
};

export const unlikeMovie = async (userId: string, movieId: number) => {
  const movie = await movieRepository.findMany(userId, movieId);

  if (!movie) {
    throw new Error("Movie not found");
  }

  await movieRepository.deleteLikedMovie(userId, movieId);

  return movie;
};

export const getLikedMovies = async (userId: string): Promise<MovieTmdb[]> => {
  const movies = await movieRepository.findMany(userId);

  if (movies.length === 0) {
    throw new Error("Movies not found");
  }

  return mapMovies(movies);
};

const mapMovie = (movie: Movie): MovieTmdb => {
  return {
    title: movie.title,
    overview: movie.overview,
    release_date: new Date(movie.releaseDate),
    adult: movie.adult,
    popularity: movie.popularity,
    video: movie.video,
    id: movie.movieId,
    vote_average: movie.voteAverage,
    vote_count: movie.voteCount,
    original_title: movie.originalTitle,
    backdrop_path: movie.backdrop,
    poster_path: movie.poster,
    original_language: movie.originalLanguage,
  };
};

const mapMovies = (movies: Movie[]): MovieTmdb[] => {
  return movies.map(mapMovie);
};
