import { FaMinus } from "@react-icons/all-files/fa/FaMinus";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import { useState } from "react";

const QuantityInput = ({ maxQuantity }: { maxQuantity: number }) => {
  const [quan, setQuan] = useState(0);

  return (
    <div className="flex border-solid border-2 border-gray-300 rounded-sm">
      <button className="p-2">
        <FaMinus />
      </button>
      <div className="w-10 border-x-2 flex items-center justify-center">
        {quan}
      </div>
      <button className="p-2">
        <FaPlus />
      </button>
    </div>
  );
};

export default QuantityInput;
