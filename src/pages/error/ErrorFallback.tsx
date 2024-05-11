import { FallbackProps } from "react-error-boundary";
import CustomError from "./CustomError";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  console.log(error.name);

  //에러 구분해서 각각의 폴백ui 렌더링

  return (
    <CustomError
      mainText={error.name}
      subText={error.message}
      resetErrorBoundary={resetErrorBoundary}
    />
  );
};

export default ErrorFallback;
