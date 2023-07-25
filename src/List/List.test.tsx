import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { List } from "./List";
import { AppContext, ContextStructure } from "../context/app.context";
import { Task } from "../model/task";

const value: ContextStructure = {
  tasksContext: {
    tasks: [{}, {}] as Task[],
  },
} as unknown as ContextStructure;

jest.mock("../Create/Create");
jest.mock("../Card/Card");
describe("Given a List component", () => {
  describe("When it is instantiated", () => {
    render(
      <AppContext.Provider value={value}>
        <List></List>
      </AppContext.Provider>
    );
    test("Then it should be in the document", () => {
      const element = screen.getByRole("list");
      expect(element).toBeInTheDocument();
    });
  });
});
