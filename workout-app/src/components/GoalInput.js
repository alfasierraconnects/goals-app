import React, { useState } from "react";

const buttonStyle =
  "rounded px-6 py-2 border-solid border border-slate-300 hover:bg-slate-800 hover:border-slate-800";
const formStyle =
  "main-form p-6 border-solid border-2 border-slate-300 flex flex-col text-white rounded";
const inputStyle =
  "rounded-sm p-1 text-black focus:ring focus:outline-none focus:border-violet-500";

export default function GoalInput() {
  const [formOpenButton, setformOpenButton] = useState(true);
  const [formState, setFormState] = useState(false);

  const openFormHandler = () => {
    setFormState(true);
    setformOpenButton(false);
  };

  const collapseButtonHandler = () => {
    setFormState(false);
    setformOpenButton(true);
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
          <form className="form flex flex-col gap-1">
            <label className="font-bold text-center text-lg">Course Goal</label>
            <input
              className={inputStyle}
              type="text"
              placeholder="Enter your Goal"
            ></input>
            <divForButtons className="flex justify-around mt-4">
              <button className={buttonStyle} onClick={collapseButtonHandler}>
                Collapse
              </button>
              <button className={buttonStyle}>Add Goal</button>
            </divForButtons>
          </form>
        )}
      </div>
    </div>
  );
}
