import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { MdShoppingCart } from "@react-icons/all-files/md/MdShoppingCart";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logoImage.png";
import { useHeaderVisibility } from "../../hooks/useHeaderVisibility";
import { useLogout } from "../../hooks/useLogout";
import CartContainer from "../cart/CartContainer";
import { useCartProductStore } from "../../store/cartStore";
import { useAuthority } from "../../hooks/useAuthority";
import { useUserStore } from "../../store/userStore";

const Header = () => {
  const { isVisible } = useHeaderVisibility();
  const navigate = useNavigate();
  const { auth } = useAuthority();
  const { logout } = useLogout();
  const { user } = useUserStore();
  const onClickMenu = (endpoint?: string) => {
    navigate(`/${endpoint ? endpoint : ""}`);
  };
  const { cartItems } = useCartProductStore();

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
            onClick={() => onClickMenu(`admin/${user?.uid}`)}
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
                <div className="relative">
                  <MdShoppingCart size={28} />
                  <span className="absolute bottom-[-5px] right-[-8px] w-5 h-5 flex items-center justify-center text-xs rounded-full bg-[#312fd0] text-white">
                    {Object.keys(cartItems).length}
                  </span>
                </div>
              </CartContainer>
            </li>
            <li
              className="menu-item"
              onClick={() => onClickMenu(`mypage/${user?.uid}`)}
            >
              <CgProfile size={26} />
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
