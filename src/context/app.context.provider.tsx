import { useTasks } from "../hooks/use.tasks";
import { AppContext } from "./app.context";

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const value = {
    tasksContext: useTasks(),
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
