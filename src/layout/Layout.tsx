import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import { Toaster } from "../components/ui/toaster";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
