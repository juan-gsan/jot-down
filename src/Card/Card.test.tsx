import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./Card";

describe("Given a Card component", () => {
  describe("When it is instantiated", () => {
    render(<Card></Card>);
    test("Then it should be in the document", () => {
      const element = screen.getByRole("heading");
      expect(element).toBeInTheDocument();
    });
  });
});
