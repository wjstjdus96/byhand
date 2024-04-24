import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logoImage.png";
import { MdShoppingCart } from "@react-icons/all-files/md/MdShoppingCart";
import { checkAuthority } from "../../utils/checkAuthority";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { useCartStore } from "../../store/cartStore";

const Header = () => {
  const navigate = useNavigate();
  const {isCartOpen, toggleCart} = useCartStore();
  const { userId, auth } = checkAuthority();

  const onClickMenu = (endpoint?: string) => {
    navigate(`/${endpoint ? endpoint : ""}`);
  };

  return (
    <header className="h-12 fixed w-full bg-white py-2 px-10 flex items-center justify-between">
      <img src={Logo} alt="logo" className="h-full" />
      <ul className="flex mr-auto pl-10 gap-6">
        <li className="menu-item" onClick={() => onClickMenu()}>
          홈
        </li>
        <li className="menu-item" onClick={() => onClickMenu("products")}>
          전체상품
        </li>
      </ul>
      <ul className="flex gap-6">
        <li className="menu-item" onClick={() => onClickMenu("login")}>
          로그인
        </li>
        <li className="menu-item" onClick={toggleCart}>
          <MdShoppingCart size={24} />
        </li>
        <li
          className="menu-item"
          onClick={() => onClickMenu(`mypage/${userId}`)}
        >
          <CgProfile size={24} />
        </li>
      </ul>
    </header>
  );
};

export default Header;
