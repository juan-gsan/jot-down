import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { AppContext, ContextStructure } from "../context/app.context";
import { Task } from "../model/task";

jest.mock("../List/List");

describe("Given an App component", () => {
  const value: ContextStructure = {
    tasksContext: {
      tasks: [{}, {}] as Task[],
    },
  } as unknown as ContextStructure;

  describe("When it is instantiated", () => {
    render(
      <AppContext.Provider value={value}>
        <App></App>
      </AppContext.Provider>
    );
    test("Then it should be in the document", async () => {
      const element = await screen.findByRole("heading");
      expect(element).toBeInTheDocument();
    });
  });
});
