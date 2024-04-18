import Logo from "../assets/logoImage.png";

const Header = () => {
  return (
    <header className="h-12 py-2 pl-1 flex items-center">
      <img src={Logo} alt="logo" className="h-full" />
      <ul className="flex">
        <li>홈</li>
        <li>전체상품</li>
      </ul>
      <ul className="flex">
        <li>로그인</li>
      </ul>
    </header>
  );
};

export default Header;
