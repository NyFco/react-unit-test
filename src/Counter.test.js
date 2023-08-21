/* eslint-disable jest/valid-title */
/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
  it("counter displays initial value correctly", () => {
    const { getByTestId } = render(<Counter initialValue={0} />);
    const countValue = +getByTestId("count").textContent;
    expect(countValue).toEqual(0);
  });

  it("count should increment by 1 if the increment button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialValue={0} />);
    const incrementBtn = getByRole("button", {
      name: "Increment",
    });
    const countPrevValue = +getByTestId("count").textContent;
    fireEvent.click(incrementBtn);
    expect(+getByTestId("count").textContent).toEqual(countPrevValue + 1);
  });

  it("count should decrement by 1 if the decrement button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialValue={0} />);
    const decrementBtn = getByRole("button", {
      name: "Decrement",
    });
    const countPrevValue = +getByTestId("count").textContent;
    fireEvent.click(decrementBtn);
    expect(+getByTestId("count").textContent).toEqual(countPrevValue - 1);
  });

  it("count should be set to 0 if the restart button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialValue={50} />);
    const restartBtn = getByRole("button", {
      name: "Restart",
    });
    fireEvent.click(restartBtn);
    expect(+getByTestId("count").textContent).toEqual(0);
  });
});
