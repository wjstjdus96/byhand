import { Button } from "../../components/ui/button";

interface ICustomError {
  mainText: string;
  subText: string;
  resetErrorBoundary: (...args: any[]) => void;
}

const CustomError = ({
  mainText,
  subText,
  resetErrorBoundary,
}: ICustomError) => {
  const onClickHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="w-screen h-screen flex flex-col gap-5 items-center justify-center">
      <div className="flex flex-col items-center">
        <div>{mainText}</div>
        <div>{subText}</div>
      </div>
      <div className="flex gap-6">
        <Button onClick={resetErrorBoundary}>다시 시동하기</Button>
        <Button onClick={onClickHome}>홈으로 돌아가기</Button>
      </div>
    </div>
  );
};

export default CustomError;
