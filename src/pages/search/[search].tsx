import { MoviesBoxArts } from "components/movieBoxArts.component";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Movie } from "server/api/routers/tmdb";
import { api } from "utils/api";

export default function SearchPage() {
  const router = useRouter();
  const { search } = router.query;

  const movieData =
    typeof search === "string" ? api.tmdb.search.useQuery({ search }) : null;

  if (movieData?.data != null) {
    return (
      <>
        <div className="m-8 items-center justify-center">
          <h1 className="my-4 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Creathus <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>

          <h2 className="text-3xl font-extrabold tracking-tight text-orange-500 text-white sm:text-[2rem]">
            Últimos lancamentos no cinema
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
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      // redirect: {
      //   destination: "/login",
      //   permanent: false,
      // },
       props: {
      user: {
        id: '1'
      },
    },
    };
  }

  return {
    props: {
      user: session.user,
    },
  };
};
