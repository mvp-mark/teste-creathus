import { Movie } from "server/entities/movie.entity";
import { movieRepository } from "server/repositories/movie.repository";
import { Movie as MovieTmdb } from "server/api/routers/tmdb";
import axios from "axios";
import { env } from "env.mjs";
import { User } from "@prisma/client";

export const likeMovie = async (userId: string, movie: MovieTmdb) => {
  const movieExists = await movieRepository.findOne(movie.id);

  if (!movieExists) {
    await movieRepository.createMovie(convertMovieApiToEntity(movie));
  }

  const likedMovie = await movieRepository.createLikedMovie(userId, movie.id);

  return likedMovie;
};

export const usersLikedMovie = async (movieId: number): Promise<User[]> => {
  const users = await movieRepository.findManyUsers(movieId);

  if (users.length === 0) {
    throw new Error("Users not found");
  }

  return users;
};

export const unlikeMovie = async (userId: string, movieId: number) => {
  const movie = await movieRepository.findOne(movieId);

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

export const getMovie = async (movieId: number): Promise<MovieTmdb> => {
  const movie = await findOne(movieId);

  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    {
      params: {
        api_key: env.TMDB_KEY,
        language: "pt-BR",
        region: "br",
      },
    }
  );
  const data = (await response.data) as MovieTmdb;

  if (!movie) await movieRepository.createMovie(convertMovieApiToEntity(data));

  return data;
};

export const findOne = async (movieId: number): Promise<MovieTmdb> => {
  const movie = await movieRepository.findOne(movieId);

  if (!movie) return;

  return mapMovie(movie);
};

export const getAllLikedMoviesByUser = async (
  userId: string
): Promise<MovieTmdb[]> => {
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

export const convertMovieApiToEntity = (movie: MovieTmdb): Movie => {
  return new Movie({
    title: movie.title,
    overview: movie.overview,
    releaseDate: new Date(movie.release_date),
    adult: movie.adult,
    popularity: movie.popularity,
    video: movie.video,
    movieId: movie.id,
    voteAverage: movie.vote_average,
    voteCount: movie.vote_count,
    originalTitle: movie.original_title,
    backdrop: movie.backdrop_path,
    poster: movie.poster_path,
    originalLanguage: movie.original_language,
  });
};
