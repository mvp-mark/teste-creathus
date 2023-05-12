import { signIn, signOut, useSession } from "next-auth/react";

type DrawerProps = {
  children: React.ReactNode;
};

//create a custom drawer with tailwind
export const Drawer = (props: DrawerProps) => {
  const { data: sessionData } = useSession();
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-center text-2xl text-white">
          {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
          {/* {secretMessage && <span> - {secretMessage}</span>} */}
        </p>
        <button
          className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
          {sessionData ? "Sign out" : "Sign in"}
        </button>
      </div>
      {props.children}
    </div>
  );
};
