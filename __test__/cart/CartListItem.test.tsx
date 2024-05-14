import { fireEvent, render } from "@testing-library/react";
import CartListItem from "../../src/components/cart/CartListItem";
import { ICheckedItem } from "../../src/hooks/useCheckboxSelection";

const product = {
  productThumbnail: "/image.png",
  productImage: ["/image.png"],
  productName: "Mock상품",
  productCategory: "fashion",
  productPrice: 10000,
  productQuantity: 10000,
  productDescription: "Mock 상품 설명",
  sellerId: "1@test.com",
  createdAt: "",
  updatedAt: "",
  id: "mock1",
};
const selectedCnt = 3;
const singleCheckHandler = jest.fn();
const checkedItems: ICheckedItem[] = [];

describe("CartListItem 컴포넌트", () => {
  const setup = async () => {
    const { findByTestId } = render(
      <CartListItem
        product={product}
        selectedCnt={selectedCnt}
        singleCheckHandler={singleCheckHandler}
        checkedItems={checkedItems}
      />
    );

    const checkbox = await findByTestId("checkbox");
    return { checkbox };
  };

  test("체크박스 클릭", async () => {
    const { checkbox } = await setup();

    fireEvent.click(checkbox);

    expect(singleCheckHandler).toHaveBeenCalledTimes(1);
    expect(singleCheckHandler).toHaveBeenCalledWith(true, {
      itemId: "mock1",
      itemCount: 3,
    });
  });
});
