import "./Tasks.css";

const Task = ({ task, ondelete }) => {
  return (
    <div className="task">
      <div className="alltast">
        <h3>{task.text}</h3>
        <h4>{task.day}</h4>
      </div>
      <div className="closebtn">
        <span onClick={() => ondelete(task.id)}>❌</span>
      </div>
    </div>
  );
};

export default Task;
