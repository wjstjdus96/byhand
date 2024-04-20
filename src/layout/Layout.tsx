import Footer from "../components/Footer";
import Header from "../components/Header";
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
