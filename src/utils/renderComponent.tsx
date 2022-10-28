import { render } from "@testing-library/react";
import { ProductProvider } from "components/ProductsContext/ProductsContext";

export const renderComponent = (testingComponent: JSX.Element) => {
  render(<ProductProvider>{testingComponent}</ProductProvider>);
};
