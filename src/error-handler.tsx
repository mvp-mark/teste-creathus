import React from "react";

type ErrorHandlerProps = {
  error: string | null;
};

const ErrorHandler: React.FC<ErrorHandlerProps> = ({ error }) => {
  if (!error) return null;

  return (
    <div className="rounded-md bg-red-500 p-4 text-white">
      <h2 className="mb-2 text-lg font-bold">Error:</h2>
      <p>{error}</p>
    </div>
  );
};

export default ErrorHandler;
