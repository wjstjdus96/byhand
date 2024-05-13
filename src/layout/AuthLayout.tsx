import React from "react";
import Header from "../components/common/Header";

interface AuthLayout {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayout) => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center h-[90vh] gap-6 pt-20">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
