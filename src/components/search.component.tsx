import { type NextPage } from "next";
import { useRef, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const SearchBar: NextPage = () => {
  const router = useRouter();
  const clickPoint = useRef<HTMLDivElement | null>(null);

  const schema = z.object({
    searchBar: z.string().min(1).max(100).nonempty(),
  });
  type FormData = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleFocus = () => {
    clickPoint.current.style.display = "none";
  };

  const handleBlur = () => {
    clickPoint.current.style.display = "block";
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const isValid = await schema.parseAsync(data);
    const { searchBar } = data;

    if (isValid) {
      return await router.push(`/search/${searchBar}`);
    }
  };

  return (
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="w-70 block rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-gray-900 focus:pl-3"
              placeholder="Search Here..."
              {...register("searchBar")}
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
