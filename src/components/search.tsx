import { router } from "@trpc/server";
import { env } from "env.mjs";
import Router from "next/router";
import { useRef, useEffect } from "react";

const SearchBar = () => {
  const clickPoint = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleFocus = () => {
    clickPoint.current.style.display = "none";
  };

  const handleBlur = () => {
    clickPoint.current.style.display = "block";
  };

  const handleSearch = (inputRef) => {
    console.log(inputRef.current.value);
    return Router.push(
      env.NEXTAUTH_URL + "/search/" + inputRef.current.value,
      {}
    );
  };

  return (
    // Your JSX code from step 1 and 2
    <div className="group flex items-center justify-center px-4">
      <div className="flex items-center justify-center px-4">
        <div className="relative mr-3">
          <div
            className="absolute left-3 top-3 hidden items-center group-hover:block"
            ref={clickPoint}
          >
            <svg
              className="h-5 w-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <form onSubmit={() => handleSearch(inputRef)}>
            <input
              type="text"
              className="w-70 block rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-gray-900 focus:pl-3"
              placeholder="Search Here..."
              ref={inputRef}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <button
              type="submit"
              className="absolute right-3 top-3 hidden items-center group-hover:block"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
