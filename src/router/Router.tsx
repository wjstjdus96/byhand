import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProductManagement from "../pages/ProductManagement";
import ProductRegister from "../pages/ProductRegister";
import NonMemberRoute from "./NonMemberRoute";
import Home from "../pages/Home";
import NonSellerRoute from "./NonSellerRoute";
import OnlySellerRoute from "./OnlySellerRoute";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NonMemberRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<NonSellerRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Route>
        <Route element={<OnlySellerRoute />}>
          <Route path="/admin/:sellerId" element={<ProductManagement />} />
          <Route
            path="/admin/:sellerId/register"
            element={<ProductRegister />}
          />
          <Route
            path="/admin/:sellerId/product/:productId/edit"
            element={<ProductRegister />}
          />
        </Route>
        <Route path="/mypage/:memberId" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
