import { useNavigate } from "react-router-dom";

const CollectionMoreBtn = ({ category }: { category: string }) => {
  const navigate = useNavigate();
  const onClickBtn = () => {
    navigate(`products?category=${category}`);
  };

  return (
    <div
      className="text-sm cursor-pointer  hover:font-semibold"
      onClick={onClickBtn}
    >
      더보기
    </div>
  );
};

export default CollectionMoreBtn;
