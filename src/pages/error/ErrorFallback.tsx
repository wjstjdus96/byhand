import { FallbackProps } from "react-error-boundary";
import CustomError from "./CustomError";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  console.log(error.stack);

  return (
    <CustomError
      mainText={error.name}
      subText={error.message}
      resetErrorBoundary={resetErrorBoundary}
    />
  );
};

export default ErrorFallback;
