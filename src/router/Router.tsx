import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PrivateRouter from "./PrivateRouter";
import Loading from "../components/common/Loading";

const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
const MyPage = lazy(() => import("../pages/MyPage"));
const Payment = lazy(() => import("../pages/Payment"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const ProductManagement = lazy(() => import("../pages/ProductManagement"));
const ProductRegister = lazy(() => import("../pages/ProductRegister"));
const Products = lazy(() => import("../pages/Products"));
const Signup = lazy(() => import("../pages/Signup"));
const Custom404 = lazy(() => import("../pages/error/404"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
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
          <Route path="/*" element={<Custom404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
