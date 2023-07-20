import { useCallback, useEffect, useMemo, useState } from "react";
import { TaskRepo } from "../services/task.repo";
import { Card } from "../Card/Card";
import { Task } from "../model/task";

export function List() {
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

  return (
    <>
      {tasks.map((item) => (
        <Card key={item.id} item={item}></Card>
      ))}
    </>
  );
}
