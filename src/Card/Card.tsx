import { useContext, useState } from "react";
import { Task } from "../model/task";
import "./Card.scss";
import { AppContext } from "../context/app.context";
import { EditCard } from "../Edit.card/Edit.card";
import { Cross, Edit } from "@blueprintjs/icons";

type PropsType = {
  item: Task;
};

export function Card({ item }: PropsType) {
  const {
    tasksContext: { handleDelete },
  } = useContext(AppContext);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleClickEdit = () => {
    setIsUpdating(!isUpdating);
  };

  const handleClickDelete = () => {
    handleDelete(item);
  };

  return (
    <>
      <li>
        {!isUpdating ? (
          <div>
            <span>{item.title}</span>
          </div>
        ) : (
          <div>
            <EditCard item={item}></EditCard>
          </div>
        )}
        <div>
          <span role="button" className="button edit" onClick={handleClickEdit}>
            <Edit />
          </span>
          <span role="button" className="button" onClick={handleClickDelete}>
            <Cross />
          </span>
        </div>
      </li>
    </>
  );
}
