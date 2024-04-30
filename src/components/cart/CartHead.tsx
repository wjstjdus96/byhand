import { IoCloseCircleOutline } from "@react-icons/all-files/io5/IoCloseCircleOutline";
import { useCartStore } from "../../store/cartStore";

const CartHead = () => {
  const { toggleCart } = useCartStore();

  return (
    <div className="flex justify-between">
      <h3 className=" text-lg font-semibold">장바구니</h3>
      <IoCloseCircleOutline
        className="cursor-pointer"
        size={24}
        onClick={toggleCart}
      />
    </div>
  );
};

export default CartHead;
