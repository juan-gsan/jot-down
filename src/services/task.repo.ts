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

  async updateTask(id: Task["id"], task: Partial<Task>): Promise<Task> {
    const newTask = await fetch(this.url + (id as string), {
      method: "PATCH",
      body: JSON.stringify(task),
      headers: { "Content-Type": "application/json" },
    });

    return newTask.json() as Promise<Task>;
  }

  async deleteTask(id: Task["id"]): Promise<void> {
    await fetch(this.url + (id as string), {
      method: "DELETE",
    });
  }
}
