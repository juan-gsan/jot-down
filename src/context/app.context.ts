import { createContext } from "react";
import { useTasks } from "../hooks/use.tasks";

export type ContextStructure = {
  tasksContext: ReturnType<typeof useTasks>;
};

export const AppContext = createContext<ContextStructure>(
  {} as ContextStructure
);
