import AlertDialogBox from "../../common/AlertDialogBox";
import { Button } from "../../ui/button";

interface IAdminBoardDeleteBtn {
  deleteHandler: () => void;
}

const AdminBoardDeleteBtn = ({ deleteHandler }: IAdminBoardDeleteBtn) => {
  return (
    <AlertDialogBox
      title="정말 삭제하시겠습니까?"
      description="한번 삭제하면 복구할 수 없습니다"
      actionName="삭제"
      onClickAction={deleteHandler}
    >
      <Button variant="outline" className="p-2 h-6 text-xs font-normal">
        삭제
      </Button>
    </AlertDialogBox>
  );
};

export default AdminBoardDeleteBtn;
