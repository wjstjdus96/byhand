import Footer from "../components/Footer";
import Header from "../components/Header";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
