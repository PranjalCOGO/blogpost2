import {AddForm} from './AddForm';
import { ShowTodos } from './ShowTodos';
import './App.css'
const { render } = require("react-dom");
const { useState } = require("react");
const { useEffect } = require("react");

// let id = 0;

const App = () => {
  const [todos, settodos] = useState([]);
  const [todoText, settodoText] = useState("");

  // to save items in localstorage even after page refresh, we can
  useEffect (() => {
    if (localStorage.getItem("todos")) {
	  settodos(JSON.parse(localStorage.getItem("todos")));
	} else {
		localStorage.setItem("todos", JSON.stringify([]));
	}
  }, [])  

  // to store things in local storage, whenever we change the todos or settodos is called
  // then we will set items in localstorage, so we will use useEffect
  useEffect(() => {
	localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  

  const add = () => {
    // id = id + 1;
    if (todoText !== "") {
      settodos([...todos, { id: Math.random(), task: todoText, status: false }]);
      settodoText("");
    } else {
      alert("Input is empty 😵‍💫!");
    }
  };

  const deleteTask = (idx) => {
    // use filter to update todos list that dont show the items that disqualifies the
    // condition
    settodos(todos.filter((todo) => todo.id !== idx));
  };

  const editTask = (id) => {
    // find the task using id param, and
    // what to update-- read from input field itself
    // update todo.id's content to new update

    let newValue = prompt();
    if (newValue !== "") {
      const editedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return {
            id: todo.id,
            task: newValue,
            status: todo.status
          }
        } else {
          return todo
        }
      })
      settodos(editedTodos);
    }

    
  };

  const completed = (id, status) => {
    // map returns something
    const updated_todos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: status,
        };
      } else {
        return todo;
      }
    });
	  settodos(updated_todos);
  };

  return (
    <>
      <h1>TODO LIST</h1>
      {/* create input field,  create array, push inputValue to array, display the array*/}
	  <AddForm todoText = {todoText} settodoText={settodoText} add={add}/>
    <ShowTodos todos={todos} completed={completed} deleteTask={deleteTask} editTask={editTask}/>
	  
	</>
  );
};

render(<App />, document.getElementById("root"));
