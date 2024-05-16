import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Meta from "../components/common/Meta";
import { Toaster } from "../components/ui/toaster";
import { IProductResData } from "../types/product";

interface ILayout {
  children: React.ReactNode;
  page?: "home" | "products" | "detail";
  product?: IProductResData;
}

const Layout = ({ children, page, product }: ILayout) => {
  return (
    <div>
      <Meta page={page} product={product} />
      <Header />
      {children}
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
