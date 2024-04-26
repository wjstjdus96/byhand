import { FaMinus } from "@react-icons/all-files/fa/FaMinus";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";

interface IQuantityInput {
  selectedQuantity: number;
  onClickMinus: () => void;
  onClickPlus: () => void;
  isMinusDisabled: boolean;
  isPlusDisabled: boolean;
  size: "small" | "medium";
}

const QuantityInput = ({
  selectedQuantity,
  onClickMinus,
  onClickPlus,
  isMinusDisabled,
  isPlusDisabled,
  size,
}: IQuantityInput) => {
  const buttonSize = {
    small: "p-1 text-xs",
    medium: "p-2",
  }[size];

  const numberSize = {
    small: "w-6 text-xs",
    medium: "w-10",
  }[size];

  return (
    <div className="flex">
      <button
        className={`${buttonSize} rounded-l-sm border-solid border border-gray-300 text-gray-300 disabled:bg-gray-300 disabled:text-white`}
        onClick={onClickMinus}
        disabled={isMinusDisabled}
      >
        <FaMinus />
      </button>
      <div
        className={`${numberSize} border-y border-gray-300 flex items-center justify-center`}
      >
        {selectedQuantity}
      </div>
      <button
        className={`${buttonSize} rounded-r-sm border-solid border border-gray-300 text-gray-300 disabled:bg-gray-300 disabled:text-white`}
        onClick={onClickPlus}
        disabled={isPlusDisabled}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default QuantityInput;
