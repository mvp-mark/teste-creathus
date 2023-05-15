interface StarsProps {
  rating: number;
}

export const Stars = (props: StarsProps) => {
  const ratings = props.rating;
  return (
    <div className="mt-4 flex flex-row">
      <div className="flex flex-row">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            fill={ratings / 2 > 1 ? "currentColor" : "none"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 2l3.09 6.37 6.91.99-5 4.85 1.18 6.88L12 17.25l-6.18 3.84 1.18-6.88-5-4.85 6.91-.99L12 2z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            fill={ratings / 2 > 2 ? "currentColor" : "none"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 2l3.09 6.37 6.91.99-5 4.85 1.18 6.88L12 17.25l-6.18 3.84 1.18-6.88-5-4.85 6.91-.99L12 2z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            fill={ratings / 2 > 3 ? "currentColor" : "none"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 2l3.09 6.37 6.91.99-5 4.85 1.18 6.88L12 17.25l-6.18 3.84 1.18-6.88-5-4.85 6.91-.99L12 2z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            fill={ratings / 2 > 4 ? "currentColor" : "none"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 2l3.09 6.37 6.91.99-5 4.85 1.18 6.88L12 17.25l-6.18 3.84 1.18-6.88-5-4.85 6.91-.99L12 2z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            fill={ratings / 2 > 5 ? "currentColor" : "none"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 2l3.09 6.37 6.91.99-5 4.85 1.18 6.88L12 17.25l-6.18 3.84 1.18-6.88-5-4.85 6.91-.99L12 2z"
          />
        </svg>
      </div>
      <div className="ml-2">{props.rating / 2}</div>
    </div>
  );
};
