import { Task } from "../model/task";

export class TaskRepo {
  constructor(public url: string) {}

  async getAllTasks(): Promise<Task[]> {
    const response = await fetch(this.url);
    const data = (await response.json()) as Promise<Task[]>;
    return data;
  }

  async createTask(item: Partial<Task>): Promise<Task> {
    const newTask = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    });

    return newTask.json() as Promise<Task>;
  }
}
