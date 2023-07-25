import { SyntheticEvent, useContext, useState } from "react";
import { AppContext } from "../context/app.context";
import { Task } from "../model/task";
import { AddToArtifact } from "@blueprintjs/icons";
import "./Create.scss";

export type FormState = Pick<Task, "title">;
export function Create() {
  const {
    tasksContext: { handleCreate },
  } = useContext(AppContext);

  const [formState, setFormState] = useState<FormState>({ title: "" });

  const handleChange = (event: SyntheticEvent) => {
    const element = event.target as HTMLFormElement;
    setFormState({
      ...formState,
      [element.name]:
        element.type === "checkbox" ? element.checked : element.value,
    });
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const newTask: Omit<Task, "id"> = {
      title: formState.title,
    };

    handleCreate(newTask);
    setFormState({ title: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="title"
          value={formState.title}
          placeholder="New Task"
          required
        ></input>
        <button type="submit">
          <AddToArtifact />
        </button>
      </form>
    </>
  );
}
