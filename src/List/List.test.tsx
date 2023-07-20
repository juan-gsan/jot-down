import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { List } from "./List";

describe("Given a List component", () => {
  describe("When it is instantiated", () => {
    render(<List></List>);
    test("Then it should be in the document", () => {
      const element = screen.getByRole("heading");
      expect(element).toBeInTheDocument();
    });
  });
});
