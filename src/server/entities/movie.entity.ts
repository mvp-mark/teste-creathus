import { v4 as uuid } from "uuid";

export class Movie {
  id: string;
  title: string;
  overview: string;
  releaseDate: Date;
  adult: boolean;
  popularity: number;
  video: boolean;
  movieId: number;
  voteAverage: number;
  voteCount: number;
  originalTitle: string;
  originalLanguage: string;
  backdrop: string;
  poster: string;
  createdAt: Date;

  constructor(
    props: Omit<Movie, "id" | "createdAt">,
    id?: string,
    createdAt?: Date
  ) {
    Object.assign(this, props);

    this.id = id ?? uuid();
    this.createdAt = createdAt ?? new Date();
  }
}
