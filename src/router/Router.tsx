import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyPage from "../pages/MyPage";
import Payment from "../pages/Payment";
import ProductDetail from "../pages/ProductDetail";
import ProductManagement from "../pages/ProductManagement";
import ProductRegister from "../pages/ProductRegister";
import Products from "../pages/Products";
import Signup from "../pages/Signup";
import PrivateRouter from "./PrivateRouter";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRouter allowed={["nonMember"]} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<PrivateRouter allowed={["nonMember", "buyer"]} />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Route>
        <Route element={<PrivateRouter allowed={["seller"]} />}>
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
        <Route element={<PrivateRouter allowed={["buyer"]} />}>
          <Route path="/mypage/:memberId" element={<MyPage />} />
          <Route path="/payment/:buyerId" element={<Payment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
