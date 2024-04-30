import Spinner from "./Spinner";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white opacity-50 backdrop-filter backdrop-blur-lg z-50 flex items-center justify-center">
      <Spinner />
    </div>
  );
};

export default Loading;
