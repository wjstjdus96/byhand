import { Button } from "../../ui/button";

interface IAdminBoardBtn {
  onClickHandler: () => void;
  name: string;
}

const AdminBoardBtn = ({ onClickHandler, name }: IAdminBoardBtn) => {
  return (
    <Button
      variant="outline"
      onClick={onClickHandler}
      className="p-2 h-6 text-xs font-normal"
    >
      {name}
    </Button>
  );
};

export default AdminBoardBtn;
