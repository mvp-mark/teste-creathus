import { MoviesBoxArts } from "components/movieBoxArts.component";
import { useRouter } from "next/router";
import { Movie } from "server/api/routers/tmdb";
import { api } from "utils/api";

export default function SearchPage() {
  const router = useRouter();
  const { search } = router.query;

  const movieData =
    typeof search === "string" ? api.tmdb.search.useQuery({ search }) : null;

  console.log(typeof movieData);

  if (movieData?.data != null) {
    return (
      <>
        <div className="items-center justify-center">
          <h1 className="my-4 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Creathus <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>

          <h2
            // make a bigger text with orange color
            className="text-3xl font-extrabold tracking-tight text-orange-500 text-white sm:text-[2rem]"
          >
            Ultimos lancamentos no cinema
          </h2>

          <div className="mt-4 grid grid-cols-7 gap-4">
            {movieData.data
              ? movieData.data.map((todo: Movie) => MoviesBoxArts(todo))
              : "Loading tRPC query..."}
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="grid min-h-screen place-content-center">
      <div className="flex items-center gap-2 text-gray-500">
        <span className="block h-16 w-16 animate-spin rounded-full border-4 border-t-blue-300"></span>
        Carregando...
      </div>
    </div>
  );
}
