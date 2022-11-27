import { useState } from "react";
import Overview from "./components/Overview";

function App() {
  let [task, setTask] = useState({text:''});
  let [tasks, setTasks] = useState([]);

  console.log(task.text);

  function onSubmitTask(e){
    e.preventDefault();
    setTasks(tasks.concat([task]));
    setTask({text:''});
    console.log(tasks);
  }

  function handleChange(e){
    setTask({text:e.target.value});
  }

  return (
    <div className="App">
      <form onSubmit={onSubmitTask}>
        <label htmlFor="taskInput">Enter task</label>
        <input 
        type="text" 
        id="taskInput"
        onChange={handleChange}
        value={task.text}        />
        <button type="submit">
          Add Task
        </button>
      </form>
      <Overview tasks={tasks}  />
    </div>
  );
}

export default App;
