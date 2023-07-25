import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Card } from "./Card";
import { AppContext, ContextStructure } from "../context/app.context";
import { Task } from "../model/task";

describe("Given a Card component", () => {
  const value: ContextStructure = {
    tasksContext: {
      handleDelete: jest.fn(),
    },
  } as unknown as ContextStructure;

  jest.mock("../Edit.card/Edit.card");

  const setIsUpdatingMock = jest.fn();
  const isUpdatingMockValue = true;

  jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useState: (initialValue: boolean) => [
      initialValue || isUpdatingMockValue,
      setIsUpdatingMock,
    ],
  }));

  beforeEach(() => {
    render(
      <AppContext.Provider value={value}>
        <Card item={{ id: "1", title: "test" } as Task}></Card>
      </AppContext.Provider>
    );
  });
  describe("When it is instantiated", () => {
    test("Then it should be in the document", () => {
      const element = screen.getByRole("listitem");
      expect(element).toBeInTheDocument();
    });
  });
  describe("When the user click on the Edit button", () => {
    test("Then it should toggle isUpdating", async () => {
      const buttons = screen.getAllByRole("button");
      await userEvent.click(buttons[0]);
      expect(isUpdatingMockValue).toEqual(true);
    });
  });
  describe("When the user click on the Delete button", () => {
    test("Then it should call handleDelete", async () => {
      const buttons = screen.getAllByRole("button");
      await userEvent.click(buttons[1]);
      expect(value.tasksContext.handleDelete).toHaveBeenCalled();
    });
  });
});
