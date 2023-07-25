import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppContext, ContextStructure } from "../context/app.context";
import { Create, FormState } from "./Create";
import userEvent from "@testing-library/user-event";

describe("Given a Create component", () => {
  const value: ContextStructure = {
    tasksContext: {
      handleCreate: jest.fn(),
    },
  } as unknown as ContextStructure;

  const mockSetFormState = jest.fn();
  const mockFormState = { title: "test" } as FormState;

  jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useState: (initialValue: FormState) => [
      initialValue || mockFormState,
      mockSetFormState,
    ],
  }));
  beforeEach(() => {
    render(
      <AppContext.Provider value={value}>
        <Create></Create>
      </AppContext.Provider>
    );
  });
  describe("When it is instantiated", () => {
    test("Then it should be in the document", () => {
      const element = screen.getByRole("button");
      expect(element).toBeInTheDocument();
    });
  });
  describe("When the user changes the input to test", () => {
    test("Then formState should be test", async () => {
      const element = screen.getByRole("textbox");
      await userEvent.type(element, "test");
      expect(mockFormState).toEqual({ title: "test" });
    });
  });
  describe("When the user submit the form", () => {
    test("Then handleCreate should have been called", async () => {
      const element = screen.getByRole("textbox");
      await userEvent.type(element, "test");
      const button = screen.getByRole("button");
      await userEvent.click(button);
      expect(value.tasksContext.handleCreate).toHaveBeenCalledWith(
        mockFormState
      );
    });
  });
});
