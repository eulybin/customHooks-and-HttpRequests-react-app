import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useFetch from "../../Hooks/useFetch";

const NewTask = (props) => {
  const { error, isLoading, sendRequest: sendTaskRequest } = useFetch();

  const enterTaskHandler = async (userInput) => {
    const createTask = (taskData) => {
      const generatedId = taskData.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: userInput };

      props.onAddTask(createdTask);
    };
    sendTaskRequest(
      {
        url: "https://reactcourse-project15-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: userInput },
      },
      createTask
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
