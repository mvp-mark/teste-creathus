import { GetServerSideProps, type NextPage } from "next";
import Head from "next/head";
import { api } from "utils/api";
import { useState } from "react";
import { Movie } from "server/api/routers/tmdb";
import ErrorHandler from "error-handler";
import { MoviesBoxArts } from "components/movieBoxArts.component";
import { getSession } from "next-auth/react";
import Loading from "components/loading.component";

const Home: NextPage = (data: {
  user: {
    id: string;
  };
}) => {
  const userId = data?.user?.id;
  const playingNow = api.tmdb.getLikedMovies.useQuery({
    userId,
  });
  const [text, setText] = useState("pokemon");
  return (
    <>
      <div className="m-8">
        <Head>
          <title>Creathus</title>
          <meta name="description" content="Generated by create-t3-app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="items-center justify-center">
          <h1 className="my-4 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Creathus <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>

          <h2
            // make a bigger text with orange color
            className="text-3xl font-extrabold tracking-tight text-orange-500  sm:text-[2rem]"
          >
            Sua coleção de filmes
          </h2>

          <div className="mt-4 grid grid-cols-7 gap-4">
            {playingNow.data ? (
              <>{playingNow.data.map((todo: Movie) => MoviesBoxArts(todo))}</>
            ) : playingNow?.error?.data == null ? (
              <Loading />
            ) : (
              <ErrorHandler error={playingNow.error?.message} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      props: {},
    };
  }

  return {
    props: {
      user: session.user,
    },
  };
};
