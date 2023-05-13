import { Stars } from "components/stars";
import { useRouter } from "next/router";
import { api } from "utils/api";

export default function MoviePage() {
  const router = useRouter();
  const { id } = router.query;

  const movieData =
    typeof id === "string" ? api.tmdb.findMovie.useQuery({ id }) : null;

  console.log(typeof movieData);

  if (movieData?.data != null) {
    const imageUrl =
      "https://image.tmdb.org/t/p/original/" + movieData.data.backdrop_path;

    return (
      <div
        className="relative flex h-screen  items-center gap-2"
        style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }}
      >
        <div className=" inset-0 bg-black bg-opacity-0 transition-opacity duration-300 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white opacity-0 transition-opacity duration-300 hover:opacity-100 sm:text-[5rem]"></h1>
          <div className="my-40 flex flex-col items-center gap-2">
            <>
              <h1 className="text text-7xl font-extrabold tracking-tight text-orange-500 opacity-100 transition-opacity duration-300 hover:opacity-90 sm:text-[5rem]">
                {movieData.data.title}
              </h1>
              <h1 className="px-2">
                {movieData.data.genres?.map((genre) => (
                  <div
                    key={genre.id}
                    className="center relative m-1 inline-block select-none whitespace-nowrap rounded-lg bg-pink-500 px-3.5 py-2 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"
                  >
                    {genre.name}
                  </div>
                ))}
              </h1>
              <Stars rating={movieData.data.vote_average} />
              <div
                //as a card class with tailwind
                className="card-body w-1/3 rounded-xl bg-black bg-opacity-90 shadow-xl shadow-orange-500"
              >
                <p className="flex-wrap text-justify text-base text-white opacity-100 transition-opacity duration-300 hover:opacity-90 ">
                  {movieData.data.overview}
                </p>
              </div>
            </>
          </div>
        </div>
      </div>
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
