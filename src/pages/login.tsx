import { GetServerSideProps, type NextPage } from "next";
import { SignInResponse, getSession, signIn } from "next-auth/react";

const Login: NextPage = () => {
  // create a login page with button to login with github and discord with tailwindcss
  return (
    <div className="flex min-h-screen items-center justify-center  px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-orange-500">
            Entre com sua conta
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <button
            onClick={() => signIn("github")}
            className="flex w-full justify-center rounded-md border border-transparent bg-gray-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Entrar com GitHub
          </button>
          <button
            onClick={() => signIn("discord")}
            className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Entrar com Discord
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
