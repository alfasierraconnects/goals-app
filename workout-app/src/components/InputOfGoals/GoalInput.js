import React, { useState, useEffect } from "react";

const buttonStyle =
  "rounded px-6 py-2 border-solid border border-slate-300 hover:bg-slate-800 hover:border-slate-800";
const formStyle =
  "main-form p-6 border-solid border-2 border-slate-300 flex flex-col text-white rounded";

export default function GoalInput(props) {
  const [formOpenButton, setFormOpenButton] = useState(true);
  const [formState, setFormState] = useState(false);
  const [goalInput, setGoalInput] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [inputStyle, setInputStyle] = useState("initial");

  useEffect(() => {
    // Update input style whenever isValid changes
    setInputStyle(
      `rounded-sm p-1 text-black focus:outline-none ${
        isValid
          ? "bg-violet-50 focus:ring-4 focus:ring-indigo-700"
          : "focus:ring-4 focus:ring-red-500 bg-red-100"
      }`
    );
  }, [isValid]);

  const openFormHandler = () => {
    setFormState(true);
    setFormOpenButton(false);
  };

  const collapseButtonHandler = () => {
    setFormState(false);
    setFormOpenButton(true);
  };

  const goalInputHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setGoalInput(event.target.value);
  };

  const submitDataHandler = (event) => {
    event.preventDefault();
    if (goalInput.trim().length === 0) {
      setIsValid(false);
      setGoalInput("");
      return;
    }
    props.sendDataToApp(goalInput);
    setGoalInput("");
  };

  return (
    <div className="sm:p-4 md:p-8">
      <div className={formStyle}>
        {formState || (
          <button className={buttonStyle} onClick={openFormHandler}>
            Add Goals
          </button>
        )}

        {formOpenButton || (
          <form
            className="form flex flex-col gap-1"
            onSubmit={submitDataHandler}
          >
            <label className="font-bold text-center text-lg">Course Goal</label>
            <input
              className={inputStyle}
              type="text"
              name="goalInput"
              placeholder="Enter your Goal"
              onChange={goalInputHandler}
              value={goalInput}
              required
            />
            <div className="flex justify-around mt-4">
              <button className={buttonStyle} onClick={collapseButtonHandler}>
                Collapse
              </button>
              <button className={buttonStyle} type="submit">
                Add Goal
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
