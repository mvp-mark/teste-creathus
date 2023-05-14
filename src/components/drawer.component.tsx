"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { HomeIcon } from "@heroicons/react/24/solid";
import SearchBar from "./search.component";

type DrawerProps = {
  children: React.ReactNode;
};

export const Drawer = (props: DrawerProps) => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex">
      <div className=" fixed z-50 flex h-screen w-1/12 flex-col justify-between bg-gray-800 text-white">
        {/* Sidebar content */}
        <p className="py-2 text-center text-7xl font-extrabold">C</p>
        <HomeIcon className="ml-4 mt-2 h-8 w-8 hover:cursor-pointer" />
        <div className="flex flex-col items-center">
          <div className="flex-grow" />
          <div className="flex flex-col items-center py-8">
            <Image
              src={sessionData?.user?.image || ""}
              alt="Avatar image"
              width={50}
              height={50}
              className="mb-4 h-20 w-20 rounded-full"
            />
            <p className="text-2xl">{sessionData?.user?.name}</p>
            <button
              onClick={sessionData ? () => void signOut() : () => void signIn()}
              className="mt-4 rounded-full bg-white/10 px-8 py-3 font-semibold text-white hover:bg-white/20"
            >
              {sessionData ? "Sair" : "Entrar"}
            </button>
          </div>
        </div>
      </div>
      <div className=" h-screen w-1/12 flex-grow bg-gray-100" />
      <div className="h-screen w-11/12 flex-grow bg-gray-100">
        <main className="flex min-h-screen flex-col  bg-gradient-to-b from-[#2e026d] to-[#15162c]">
          <SearchBar />
          {props.children}
        </main>
      </div>
    </div>
  );
};