import React from "react";
import Header from "../components/common/Header";
import Meta from "../components/common/Meta";

interface AuthLayout {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayout) => {
  return (
    <div>
      <Meta />
      <Header />
      <div className="flex flex-col justify-center items-center h-[90vh] gap-6 pt-20">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
