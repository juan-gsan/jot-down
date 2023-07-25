import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppContext, ContextStructure } from "../context/app.context";
import { EditCard } from "./Edit.card";
import { Task } from "../model/task";
import userEvent from "@testing-library/user-event";

describe("Given an EditCard component", () => {
  const value: ContextStructure = {
    tasksContext: {
      handleUpdate: jest.fn(),
    },
  } as unknown as ContextStructure;

  const mockSetCurrentInput = jest.fn();
  const mockCurrentInput = "test";

  jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useState: (initialValue = "") => [
      initialValue || mockCurrentInput,
      mockSetCurrentInput,
    ],
  }));
  beforeEach(() => {
    render(
      <AppContext.Provider value={value}>
        <EditCard item={{} as Task}></EditCard>
      </AppContext.Provider>
    );
  });
  describe("When it is instantiated", () => {
    test("Then it should be in the document", () => {
      const element = screen.getByRole("textbox");
      expect(element).toBeInTheDocument();
    });
  });

  describe("When the user changes the input to test", () => {
    test("Then currentInput should be test", async () => {
      const element = screen.getByRole("textbox");
      await userEvent.type(element, "test");
      expect(mockCurrentInput).toEqual("test");
    });
  });
});
