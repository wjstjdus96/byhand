import { fireEvent, render } from "@testing-library/react";
import QuantityInput from "../../src/components/common/form/QuantityInput";

const quantityHandler = {
  onClickMinus: jest.fn(),
  onClickPlus: jest.fn(),
  isMinusDisabled: false,
  isPlusDisabled: false,
};
const initialSelectedQuantity = 2;

describe("수량 선택", () => {
  const setup = () => {
    const { getByTestId } = render(
      <QuantityInput
        selectedQuantity={initialSelectedQuantity}
        quantityHandler={quantityHandler}
        size="medium"
      />
    );

    const plusButton = getByTestId("plus-button");
    const minusButton = getByTestId("minus-button");
    const value = getByTestId("quantity-value");
    return { plusButton, minusButton, value };
  };
  test("+ 클릭시 수량 증가", () => {
    const { plusButton } = setup();
    fireEvent.click(plusButton);

    expect(quantityHandler.onClickPlus).toHaveBeenCalledTimes(1);
  });
  test("- 클릭시 수량 감소", () => {
    const { minusButton } = setup();
    fireEvent.click(minusButton);

    expect(quantityHandler.onClickMinus).toHaveBeenCalledTimes(1);
  });
});
