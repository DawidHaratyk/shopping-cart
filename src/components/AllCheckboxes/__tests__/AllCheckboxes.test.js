import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AllCheckboxes from "../AllCheckboxes";

describe("AllCheckboxes", () => {
  test("validate checkbox checked value on action (click)", () => {
    const mockSetAllCheckboxes = jest.fn();
    const mockSetFilters = jest.fn();

    render(
      <AllCheckboxes
        allCheckboxes={[
          {
            priceOrder: "ascending",
            isChecked: true,
            id: 0,
          },
          {
            priceOrder: "descending",
            isChecked: false,
            id: 1,
          },
        ]}
        setAllCheckboxes={mockSetAllCheckboxes}
        setFilters={mockSetFilters}
      />
    );

    // test amount of checkboxes
    const allCheckboxes = screen.getAllByRole("checkbox");
    expect(allCheckboxes).toHaveLength(2);

    // test if checkboxes are checked on initial render
    const withinFirstCheckboxView = screen.getByText(/ascending/i);
    const firstCheckbox = within(withinFirstCheckboxView).getByRole("checkbox");
    expect(firstCheckbox).toBeChecked();

    const withinSecondCheckboxView = screen.getByText(/descending/i);
    const secondCheckbox = within(withinSecondCheckboxView).getByRole(
      "checkbox"
    );
    expect(secondCheckbox).not.toBeChecked();

    // test results on action (click)
    userEvent.click(firstCheckbox);
    expect(mockSetAllCheckboxes).toHaveBeenCalledTimes(1);
    expect(mockSetFilters).toHaveBeenCalledTimes(0);

    userEvent.click(secondCheckbox);
    expect(mockSetAllCheckboxes).toHaveBeenCalledTimes(2);
    expect(mockSetFilters).toHaveBeenCalledTimes(1);
  });
});
