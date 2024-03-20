import React from "react";
import GoalItems from "./GoalItems";

export default function GoalsList(props) {
  return (
    <div className="sm:p-4 md:p-8">
      <ul className="flex flex-col gap-1">
        {props.courseGoals.map((el) => {
          return (
            <GoalItems
              key={el.id}
              id={el.id}
              text={el.text}
              onDelete={props.onDeleteItem}
            />
          );
        })}
      </ul>
    </div>
  );
}
