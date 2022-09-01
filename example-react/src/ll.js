import Navbar from './Navbar';

import logo from './logo.svg';

import './App.css';
import { useState, useEffect } from 'react';



function LL() {
  const[task1, editTask] =useState("");
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] =useState("");
  function EditMessage() {
    return(
        <input type="text" value={inputValue} onChange={new1List} />
    );
   }

  useEffect(()=>{
    console.log('test')
    let data = {
      arr : tasks
    }
    if(tasks.length){
      window.localStorage.setItem('tasks_list', JSON.stringify(data))
    }

  }, [tasks])

  useEffect(()=>{
  })
//   useEffect(()=>{
//      let data =  window.localStorage.getItem('tasks_list');
//      console.log(data)
//      if(data){
//       data = JSON.parse(data).arr;
//         setTasks(data);
//      }
//   }, [])

  const newList = (event) => {
    console.log(event.target)
    setInputValue(event.target.value)
 
  }
  const new1List = (event) => {
    console.log(event.target)
    editTask(event.target.value)
 
  }
  const updateList = function(){
    setTasks((prevTaskList)=>{
      return [...prevTaskList, inputValue];
    })
    setInputValue('');
  }


  const editList = function(task){
    tasks[task]=task1;
    setTasks([...tasks]);
  }

   
  return (
    <div className="App">
      <Navbar></Navbar>
      
        <label>ToDo Lfffist
          <input type="text" value={inputValue} onChange={newList}/>
        </label>
        
        <button onClick={updateList}>Add Task</button>
        
        {tasks.map((task)=>{
          return (<div>
            <span>{task}</span>
            <span> <EditMessage /><button onClick={editList(task)} >Edit
                </button></span>
            
            </div>)
        })}
      
    </div>
  );
}

export default LL;