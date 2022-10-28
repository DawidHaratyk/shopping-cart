import { screen, within } from "@testing-library/react";
import { renderComponent } from "utils/renderComponent";
import AllCheckboxes from "../AllCheckboxes";

test("cos", () => {
  // naucz się mockować funkcje

  renderComponent(
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
      setAllCheckboxes={() => {}}
      setFilters={() => {}}
    />
  );

  const allCheckboxes = screen.getAllByRole("checkbox");
  expect(allCheckboxes).toHaveLength(2);

  const withinFirstCheckboxView = screen.getByText(/ascending/i);
  const firstCheckbox = within(withinFirstCheckboxView).getByRole("checkbox");
  expect(firstCheckbox).not.toBeChecked();
});
