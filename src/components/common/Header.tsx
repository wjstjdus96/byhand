import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { MdShoppingCart } from "@react-icons/all-files/md/MdShoppingCart";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logoImage.png";
import { useHeaderVisibility } from "../../hooks/useHeaderVisibility";
import { useCartStore } from "../../store/cartStore";
import { checkAuthority } from "../../utils/checkAuthority";
import { useLogout } from "../../hooks/useLogout";
import CartContainer from "../cart/CartContainer";

const Header = () => {
  const { isVisible } = useHeaderVisibility();
  const navigate = useNavigate();
  const { userId, auth } = checkAuthority();
  const { logout } = useLogout();
  const onClickMenu = (endpoint?: string) => {
    navigate(`/${endpoint ? endpoint : ""}`);
  };

  const header_style = `fixed top-0 left-0 z-10 w-full h-12 py-2 px-10 flex items-center justify-between bg-white shadow-md transition-transform duration-300 ${
    isVisible ? "translate-y-0" : "-translate-y-full"
  }`;

  return (
    <header className={header_style}>
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
        {auth == "seller" && (
          <li
            className="menu-item"
            onClick={() => onClickMenu(`admin/${userId}`)}
          >
            나의 판매상품
          </li>
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
            <li className="menu-item">
              <CartContainer>
                <MdShoppingCart size={24} />
              </CartContainer>
            </li>
            <li
              className="menu-item"
              onClick={() => onClickMenu(`mypage/${userId}`)}
            >
              <CgProfile size={24} />
            </li>
          </>
        )}
        {auth == "seller" && (
          <li className="menu-item" onClick={logout}>
            로그아웃
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
