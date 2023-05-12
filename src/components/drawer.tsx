import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

type DrawerProps = {
  children: React.ReactNode;
};

//create a custom drawer with tailwind
export const Drawer = (props: DrawerProps) => {
  const { data: sessionData } = useSession();
  // create a custom sidebar with tailwind on the right with a children prop
  return (
    <div className="flex flex-row">
      <div className="flex  w-1/12 flex-col bg-gray-800">
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
            <p className="text-7xl">C</p>
            {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
          </p>
          <button
            className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
            onClick={sessionData ? () => void signOut() : () => void signIn()}
          >
            {sessionData ? "Sign out" : "Sign in"}
          </button>
        </div>
      </div>
      <div className="flex w-11/12  flex-col bg-gray-100">{props.children}</div>
    </div>
  );
};
