"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

type DrawerProps = {
  children: React.ReactNode;
};

export const Drawer = (props: DrawerProps) => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-row">
      <div className="flex w-1/12 flex-grow flex-col justify-between bg-gray-800">
        <p className="text-center text-7xl font-extrabold text-white">C</p>
        <div className="mb-4 flex flex-col items-center gap-2">
          {sessionData && (
            <Image
              src={sessionData.user?.image || ""}
              width={50}
              key={sessionData.user?.id}
              height={50}
              className="rounded-full"
              alt="Avatar image"
            />
          )}
          <p className="text-2xl text-white">
            {sessionData && <span>{sessionData.user?.name}</span>}
          </p>
          <button
            className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
            onClick={sessionData ? () => void signOut() : () => void signIn()}
          >
            {sessionData ? "Sair" : "Entrar"}
          </button>
        </div>
      </div>
      <div className="flex w-11/12 flex-col bg-gray-100">{props.children}</div>
    </div>
  );
};
