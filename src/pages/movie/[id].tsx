import { Stars } from "components/stars.component";
import ErrorHandler from "error-handler";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { api } from "utils/api";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { GetServerSideProps } from "next";
import Loading from "components/loading.component";
import AvatarCarousel from "components/carousel.component";

export default function MoviePage(user: { user: string }) {
  const router = useRouter();
  const { id } = router.query;
  const { mutate } = api.tmdb.saveLike.useMutation();

  const movieData =
    typeof id === "string" ? api.tmdb.findMovie.useQuery({ id }) : null;

  const users =
    typeof id === "string"
      ? api.tmdb.getUsersWhoLiked.useQuery({
          movieId: +id,
        })
      : null;

  if (movieData?.data != null) {
    const saveMovie = () => {
      try {
        mutate({
          movieId: movieData.data.id,
          userId: user.user,
        });
        enqueueSnackbar("Filme Curtido com sucesso!", { variant: "success" });
      } catch (error) {}
    };
    const imageUrl =
      "https://image.tmdb.org/t/p/original/" + movieData.data.backdrop_path;

    return (
      <div
        className="relative flex h-screen items-center  p-8"
        style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }}
      >
        <Head>
          <title>{movieData.data.title ?? movieData.data.original_title}</title>
          <meta name="description" content="Generated by create-t3-app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex items-center justify-center bg-black bg-opacity-0 transition-opacity duration-300  ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white opacity-0 transition-opacity duration-300 hover:opacity-100"></h1>
          <div className="my-40 flex flex-col items-center justify-center gap-2">
            <>
              <h1 className=" text p-16 text-7xl font-extrabold tracking-tight text-orange-500 opacity-100 transition-opacity duration-300 hover:opacity-90">
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
              <div className="card w-2/3 rounded-xl bg-black bg-opacity-90 shadow-xl shadow-orange-500">
                <p className="card-body flex-wrap text-justify text-base text-white opacity-90 transition-opacity duration-300 hover:opacity-100 ">
                  {movieData.data.overview ||
                    "Infelizmente, nem todos os filmes conseguem ter descrições acessíveis e informativas para o público. Essa falta de informações pode ser devido a várias razões, como produções independentes com baixo orçamento, distribuição limitada ou falta de divulgação adequada. Em alguns casos, filmes menos conhecidos podem ser tesouros escondidos que merecem mais atenção do público e da crítica."}
                </p>
              </div>
            </>
            <button
              onClick={saveMovie}
              className=" m-2 mt-8 rounded-xl bg-orange-500 p-2 text-white"
            >
              Adicionar a coleção
            </button>
            {users?.data != null && (
              <>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="flex text-2xl font-extrabold tracking-tight text-white opacity-100 transition-opacity duration-300 hover:opacity-90">
                    Quem também gostou
                  </h1>
                  <div className="flex h-32 w-32 flex-col items-center justify-center shadow shadow-orange-500">
                    <AvatarCarousel users={users?.data} />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return <Loading />;
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
      user: { id: '1'},
    },
    };
  }

  return {
    props: {
      user: session.user.id,
    },
  };
};
