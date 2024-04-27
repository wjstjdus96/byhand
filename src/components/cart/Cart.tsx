import { useCartProductStore, useCartStore } from "../../store/cartStore";
import { IoCloseCircleOutline } from "@react-icons/all-files/io5/IoCloseCircleOutline";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import CartList from "./CartList";
import { useEffect, useState } from "react";
import { useCheckboxSelection } from "../../hooks/useCheckboxSelection";
import { convertPriceUnit } from "../../utils/convertPriceUnit";

const Cart = () => {
  const { toggleCart } = useCartStore();
  const { cartItems } = useCartProductStore();
  const { checkedItems, handleSingleCheck, handleAllCheck } =
    useCheckboxSelection({
      allItems: Object.entries(cartItems).map(([itemId, itemCount]) => ({
        itemId,
        itemCount,
      })),
    });
  const [checkedItemsTotalPrice, setCheckedItemsTotalPrice] =
    useState<number>(0);

  return (
    <div className="fixed top-0 right-0 w-[80vh] h-screen  py-6 px-8 bg-white shadow flex flex-col gap-6 ">
      <div className="flex justify-between">
        <h3 className=" text-lg font-semibold">장바구니</h3>
        <IoCloseCircleOutline
          className="cursor-pointer"
          size={24}
          onClick={toggleCart}
        />
      </div>

      <div className=" border-solid border-2 border-[#2c208c] rounded-md p-6 flex flex-col gap-5">
        <h4 className="font-semibold">주문 예상 금액</h4>
        <Separator />
        <div className="flex justify-between">
          <p>총 {checkedItems.length}건 주문금액</p>
          <p>{convertPriceUnit(checkedItemsTotalPrice)}원</p>
        </div>
        <Button>구매하기</Button>
      </div>

      <CartList
        checkedItems={checkedItems}
        singleCheckHandler={handleSingleCheck}
        allCheckHandler={handleAllCheck}
        totalPriceHandler={setCheckedItemsTotalPrice}
      />
    </div>
  );
};

export default Cart;
