import { useNavigate } from "react-router-dom";
import Logo from "../assets/logoImage.png";

const Header = () => {
  const navigate = useNavigate();

  const onClickMenu = (endpoint?: string) => {
    navigate(`/${endpoint ? endpoint : ""}`);
  };

  return (
    <header className="h-12 w-screen py-2 px-10 flex items-center justify-between">
      <img src={Logo} alt="logo" className="h-full" />
      <ul className="flex mr-auto pl-10 gap-6">
        <li className="menu-item" onClick={() => onClickMenu()}>
          홈
        </li>
        <li className="menu-item" onClick={() => onClickMenu("products")}>
          전체상품
        </li>
      </ul>
      <ul>
        <li className="menu-item" onClick={() => onClickMenu("login")}>
          로그인
        </li>
      </ul>
    </header>
  );
};

export default Header;
