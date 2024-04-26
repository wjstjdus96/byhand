import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { MdShoppingCart } from "@react-icons/all-files/md/MdShoppingCart";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logoImage.png";
import { useCartStore } from "../../store/cartStore";
import { checkAuthority } from "../../utils/checkAuthority";

const Header = () => {
  const navigate = useNavigate();
  const { toggleCart } = useCartStore();
  const { userId, auth } = checkAuthority();
  const headerRef = useRef(null);

  const onClickMenu = (endpoint?: string) => {
    navigate(`/${endpoint ? endpoint : ""}`);
  };

  return (
    <header
      ref={headerRef}
      className={`h-12 fixed w-full bg-white py-2 px-10 flex items-center justify-between transition-transform duration-300 ease-in-out `}
    >
      <img src={Logo} alt="logo" className="h-full" />
      <ul className="flex mr-auto pl-10 gap-6">
        {auth != "seller" && (
          <>
            <li className="menu-item" onClick={() => onClickMenu()}>
              홈
            </li>
            <li className="menu-item" onClick={() => onClickMenu("products")}>
              전체상품
            </li>
          </>
        )}
      </ul>
      <ul className="flex gap-6">
        {auth == "nonMember" && (
          <li className="menu-item" onClick={() => onClickMenu("login")}>
            로그인
          </li>
        )}
        {auth == "buyer" && (
          <>
            <li className="menu-item" onClick={toggleCart}>
              <MdShoppingCart size={24} />
            </li>
            <li
              className="menu-item"
              onClick={() => onClickMenu(`mypage/${userId}`)}
            >
              <CgProfile size={24} />
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
