import { fireEvent, render } from "@testing-library/react";
import Header from "../src/components/common/Header";
import { BrowserRouter } from "react-router-dom";

const onClickMenu = jest.fn();

describe("헤더", () => {
  const setUp = () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const homeButton = getByText("홈");
    return { homeButton };
  };

  test("나의 판매 상품", async () => {
    const { homeButton } = setUp();

    await fireEvent.click(homeButton);
    expect(onClickMenu).toHaveBeenCalledWith();
  });
});
