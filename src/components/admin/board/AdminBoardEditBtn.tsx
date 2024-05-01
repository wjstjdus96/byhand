import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";

interface IAdminBoardEditBtn {
  productId: string;
}

const AdminBoardEditBtn = ({ productId }: IAdminBoardEditBtn) => {
  const navigate = useNavigate();
  const onClickEdit = () => {
    navigate(`product/${productId}/edit`);
  };

  return (
    <Button onClick={onClickEdit} className="p-2 h-6 text-xs font-normal">
      수정
    </Button>
  );
};

export default AdminBoardEditBtn;
