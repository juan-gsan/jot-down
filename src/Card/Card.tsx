import { Task } from "../model/task";

type PropsType = {
  item: Task;
};

export function Card({ item }: PropsType) {
  return (
    <>
      <article>{item.title}</article>
    </>
  );
}
