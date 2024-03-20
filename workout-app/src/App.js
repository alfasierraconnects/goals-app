import React, { useState } from "react";
import GoalInput from "./components/InputOfGoals/GoalInput";
import GoalsList from "./components/ListOfGoals/GoalsList";

const dummy_goals = [
  { text: "Do all exercises!", id: "g1" },
  { text: "Finish the course!", id: "g2" },
];

function App() {
  const [courseGoals, setCourseGoals] = useState(dummy_goals);

  const onDataFromGoalInputHandler = (data) => {
    setCourseGoals((prevState) => {
      const newData = { text: data, id: Math.random().toString() };
      return [...prevState, newData];
    });
  };

  return (
    <div className="bg-slate-950 h-screen text-white">
      <GoalInput sendDataToApp={onDataFromGoalInputHandler} />
      <GoalsList courseGoals={courseGoals} />
    </div>
  );
}

export default App;
