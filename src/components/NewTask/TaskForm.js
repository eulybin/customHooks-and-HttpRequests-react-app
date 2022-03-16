import { useRef } from "react";
import classes from "./TaskForm.module.css";

const TaskForm = (props) => {
  const taskInputRef = useRef();
  const formRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    let enteredValue = taskInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }

    formRef.current.reset();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler} ref={formRef}>
      <input type="text" ref={taskInputRef} />
      <button>{props.loading ? "Sending..." : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
