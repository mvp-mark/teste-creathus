import Image from "next/image";
import Link from "next/link";
import { Movie } from "server/api/routers/tmdb";
import { Stars } from "./stars.component";

export function MoviesBoxArts(todo: Movie) {
  return (
    <Link href={`/movie/${todo.id}`} className="hover:cursor-pointer">
      <div key={todo.id} className="flex flex-col items-center gap-4">
        <Image
          src={"https://image.tmdb.org/t/p/w185/" + todo.poster_path}
          width={185}
          height={278}
          className="rounded-xl shadow-2xl shadow-orange-500  hover:shadow-lg hover:shadow-orange-500 "
          alt={todo.title ?? todo.original_title}
        />
        <Stars rating={todo.vote_average} />
        <span className="p-2 text-center text-lg font-medium">
          {todo.title ?? todo.original_title}
        </span>
      </div>
    </Link>
  );
}
