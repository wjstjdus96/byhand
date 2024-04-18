import Header from "../components/Header";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
