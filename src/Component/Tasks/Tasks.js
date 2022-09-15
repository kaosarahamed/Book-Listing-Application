import "./Tasks.css";
import Task from "./Task";

function Tasks({ tasks, ondelete }) {
  return (
    <div>
      {tasks.map((task, id) => (
        <Task key={id} task={task} ondelete={ondelete} />
      ))}
    </div>
  );
}

export default Tasks;
