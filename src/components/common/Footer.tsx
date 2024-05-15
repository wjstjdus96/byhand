import React from "react";

const Footer = React.memo(() => {
  return (
    <div className="h-[25vh] bg-[#2c208c] p-10 flex  items-center justify-between text-slate-300 text-xs">
      <div className="flex flex-col gap-1">
        <span className="font-bold text-xl">BYHAND</span>
        <span>Developed by 전서연</span>
        <span className=" self-end">©2024. All rights Reserved.</span>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-1 items-end">
          <div className="flex gap-2">
            <span className="font-semibold">Contact </span>
            <span>wjstjdus96@naver.com</span>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold">Instagram </span>
            <span>@wjdus99</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Footer;
