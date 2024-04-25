import { FaMinus } from "@react-icons/all-files/fa/FaMinus";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";

interface IQuantityInput {
  selectedQuantity: number;
  onClickMinus: () => void;
  onClickPlus: () => void;
  isMinusDisabled: boolean;
  isPlusDisabled: boolean;
}

const QuantityInput = ({
  selectedQuantity,
  onClickMinus,
  onClickPlus,
  isMinusDisabled,
  isPlusDisabled,
}: IQuantityInput) => {
  return (
    <div className="flex border-solid border-2 border-gray-400 rounded-sm">
      <button
        className="p-2 text-gray-400 disabled:bg-gray-400 disabled:text-white"
        onClick={onClickMinus}
        disabled={isMinusDisabled}
      >
        <FaMinus className="" />
      </button>
      <div className="w-10 border-x-2 border-gray-400 flex items-center justify-center">
        {selectedQuantity}
      </div>
      <button
        className="p-2 text-gray-400  disabled:bg-gray-400 disabled:text-white"
        onClick={onClickPlus}
        disabled={isPlusDisabled}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default QuantityInput;
