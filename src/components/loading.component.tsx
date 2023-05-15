import ErrorHandler from "error-handler";
import { type NextPage } from "next";

interface Props {
  children?: React.ReactNode;
}

const Loading = (props: Props) => {
  return (
    <div className="grid place-content-center">
      {props.children && (
        <div className="flex items-center gap-2 text-gray-500">
          <span className="block h-16 w-16 animate-spin rounded-full border-4 border-t-blue-300"></span>
          Carregando...
        </div>
      )}
    </div>
  );
};

export default Loading;
