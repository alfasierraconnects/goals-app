import React from "react";

export default function GoalItems(props) {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="bg-slate-800 p-1 rounded w-full" onClick={deleteHandler}>
      {props.text}
    </li>
  );
}
