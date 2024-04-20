import { Button } from "../../ui/button";

interface IAdminBoardEditBtn {
  productId: string;
}

const AdminBoardEditBtn = ({ productId }: IAdminBoardEditBtn) => {
  const onClickEdit = () => {};

  return (
    <Button onClick={onClickEdit} className="p-2 h-6 text-xs font-normal">
      수정
    </Button>
  );
};

export default AdminBoardEditBtn;
