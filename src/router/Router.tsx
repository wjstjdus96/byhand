import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProductManagement from "../pages/ProductManagement";
import ProductRegister from "../pages/ProductRegister";
import NonMemberRoute from "./NonMemberRoute";
import Home from "../pages/Home";
import NonSellerRoute from "./NonSellerRoute";
import OnlySellerRoute from "./OnlySellerRoute";

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
        </Route>
        <Route element={<OnlySellerRoute />}>
          <Route path="/admin/:sellerId" element={<ProductManagement />} />
          <Route
            path="/admin/:sellerId/register"
            element={<ProductRegister />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
