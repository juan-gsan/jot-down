import { useCallback, useEffect, useMemo, useState } from "react";
import { Task } from "../model/task";
import { TaskRepo } from "../services/task.repo";

export function useTasks() {
  const [tasks, setTasks] = useState([] as Task[]);

  const taskRepo = useMemo(
    () => new TaskRepo("http://localhost:3000/items"),
    []
  );

  const handleLoad = useCallback(async () => {
    const response = await taskRepo.getAllTasks();
    setTasks(response);
  }, [taskRepo]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  const handleCreate = async (task: Omit<Task, "id">) => {
    try {
      const newTask = await taskRepo.createTask(task);
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    tasks,
    handleCreate,
  };
}
