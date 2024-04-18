import { Button } from "../ui/button";

interface ICheckOtherWay {
  type: string;
  onClick: () => void;
}

const CheckOtherWay = ({ onClick, type }: ICheckOtherWay) => {
  return (
    <div className="flex items-center">
      <p>
        {type == "login" ? "아직 회원이 아니신가요?" : "이미 회원이신가요?"}
      </p>
      <Button variant="link" onClick={onClick}>
        {type == "login" ? "회원가입" : "로그인"}
      </Button>
    </div>
  );
};

export default CheckOtherWay;
