import { render, waitFor } from "@testing-library/react";
import CartList from "../../src/components/cart/CartList";
import { IProductResData } from "../../src/types/product";
import { ICheckedItem } from "../../src/hooks/useCheckboxSelection";

const checkHandlerMock = {
  handleSingleCheck: jest.fn(),
  handleAllCheck: jest.fn(),
  handleInitItems: jest.fn(),
};

describe("CartList 컴포넌트", () => {
  const setup = ({
    products,
    checkedItems,
  }: {
    products: IProductResData[];
    checkedItems: ICheckedItem[];
  }) => {
    const { getByText } = render(
      <CartList
        checkHandler={checkHandlerMock}
        products={products}
        checkedItems={checkedItems}
      />
    );

    return { getByText };
  };
  test("장바구니 상품이 있는 경우", async () => {
    const products: IProductResData[] = [
      {
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
      },
    ];
    const checkedItems: ICheckedItem[] = [
      {
        itemId: "mock1",
        itemCount: 3,
      },
    ];
    const { getByText } = setup({ products, checkedItems });

    await waitFor(() => {
      const cartListItem1 = getByText("Mock상품");
      expect(cartListItem1).toBeInTheDocument();
    });
  });
  test("장바구니 빈 경우", () => {
    const products: IProductResData[] = [];
    const checkedItems: ICheckedItem[] = [];
    const { getByText } = setup({ products, checkedItems });

    const emptyBox = getByText("장바구니가 비었습니다");
    expect(emptyBox).toBeInTheDocument();
  });
});
