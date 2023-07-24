import { useContext } from "react";
import { Card } from "../Card/Card";
import { Create } from "../Create/Create";
import { AppContext } from "../context/app.context";
import "./List.scss";

export function List() {
  const {
    tasksContext: { tasks },
  } = useContext(AppContext);

  return (
    <>
      <Create></Create>
      <section className="task-list">
        <ul>
          {tasks.map((item) => (
            <Card key={item.id} item={item}></Card>
          ))}
        </ul>
      </section>
    </>
  );
}
