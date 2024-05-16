import { FaMinus } from "@react-icons/all-files/fa/FaMinus";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";

interface IQuantityHandler {
  onClickMinus: () => void;
  onClickPlus: () => void;
  isMinusDisabled: boolean;
  isPlusDisabled: boolean;
}

interface IQuantityInput {
  selectedQuantity: number;
  quantityHandler: IQuantityHandler;
  size: "small" | "medium";
}

const QuantityInput = ({
  selectedQuantity,
  quantityHandler,
  size,
}: IQuantityInput) => {
  const buttonSize = {
    small: "p-1 text-[10px]",
    medium: "p-2",
  }[size];

  const numberSize = {
    small: "w-5 text-[10px]",
    medium: "w-10",
  }[size];

  return (
    <div className="flex">
      <button
        className={`${buttonSize} rounded-l-sm border-solid border border-gray-300 text-gray-300 disabled:bg-gray-300 disabled:text-white`}
        onClick={quantityHandler.onClickMinus}
        disabled={quantityHandler.isMinusDisabled}
        data-testid="minus-button"
      >
        <FaMinus />
      </button>
      <div
        className={`${numberSize} border-y border-gray-300 flex items-center justify-center`}
        data-testid="quantity-value"
      >
        {selectedQuantity}
      </div>
      <button
        className={`${buttonSize} rounded-r-sm border-solid border border-gray-300 text-gray-300 disabled:bg-gray-300 disabled:text-white`}
        onClick={quantityHandler.onClickPlus}
        disabled={quantityHandler.isPlusDisabled}
        data-testid="plus-button"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default QuantityInput;
