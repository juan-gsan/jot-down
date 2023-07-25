import { SyntheticEvent, useEffect, useState, useContext } from "react";
import { Task } from "../model/task";
import { AppContext } from "../context/app.context";
import "./Edit.card.scss";

type PropsType = {
  item: Task;
};

export function EditCard({ item }: PropsType) {
  const {
    tasksContext: { handleUpdate },
  } = useContext(AppContext);
  const [currentInput, setCurrentInput] = useState(item.title);

  useEffect(() => {
    setCurrentInput(item.title);
  }, [item.title]);

  const handleChange = (event: SyntheticEvent) => {
    const element = event.target as HTMLInputElement;
    setCurrentInput(element.value);
  };

  const handleBlur = () => {
    const updatedItem = { ...item, title: currentInput };
    handleUpdate(updatedItem);
  };

  return (
    <>
      <input
        type="text"
        value={currentInput}
        onChange={handleChange}
        onBlur={handleBlur}
      ></input>
    </>
  );
}
