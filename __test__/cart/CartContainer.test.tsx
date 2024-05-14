import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CartContainer from "../../src/components/cart/CartContainer";

const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </BrowserRouter>
  );
};

describe("CartContainer 컴포넌트", () => {
  const setup = () => {
    const { getByText } = render(
      <CartContainer>
        <button>장바구니 오픈</button>
      </CartContainer>,
      { wrapper: createWrapper() }
    );

    const openButton = getByText("장바구니 오픈");
    return { openButton };
  };

  test("장바구니 클릭 시 오픈", () => {
    const { openButton } = setup();
    fireEvent.click(openButton);

    const cartText = screen.getByText("장바구니");
    expect(cartText).toBeInTheDocument();
  });
  test("장바구니 외부 클릭 시 클로즈", () => {
    const { openButton } = setup();
    fireEvent.click(openButton);

    fireEvent.click(document.body);
    const cartContent = screen.queryByText("장바구니");
    expect(cartContent).toBeNull();
  });
});
