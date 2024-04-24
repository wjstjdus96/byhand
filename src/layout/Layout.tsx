import { useEffect } from "react";
import Cart from "../components/cart/Cart";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import { Toaster } from "../components/ui/toaster";
import { useCartStore } from "../store/cartStore";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  const { isCartOpen } = useCartStore();

  useEffect(() => {
    console.log(isCartOpen);
  }, [isCartOpen]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
      <Toaster />
      {isCartOpen && <Cart />}
    </div>
  );
};

export default Layout;
