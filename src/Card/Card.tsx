import { Task } from "../model/task";
import "./Card.scss";

type PropsType = {
  item: Task;
};

export function Card({ item }: PropsType) {
  return (
    <>
      <li>{item.title}</li>
    </>
  );
}
