import Navbar from './Navbar';

import logo from './logo.svg';

import './App.css';
import { useState, useEffect } from 'react';



function AddTask() {
  //const[task1, editTask] =useState("");
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] =useState("");
  // function EditMessage() {
  //   return(
  //       <input type="text" value={inputValue} onChange={new1List} />
  //   );
  //  }

  const [inputValue1, setInputValue1]=useState("");


    function Edit(index)
    {
        setTasks(tasks.map((t,i)=>{
            if(i===index) return inputValue;
            else return t;
        }))
    }


    const newList1 = (event) => {
        console.log(event.target)
        setInputValue1(event.target.value)
     
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
  // const new1List = (event) => {
  //   console.log(event.target)
  //   editTask(event.target.value)
 
  // }
  const updateList = function(){
    setTasks((prevTaskList)=>{
      return [...prevTaskList, inputValue];
    })
    setInputValue('');
  }


  // const editList = function(task){
  //   tasks[task]=task1;
  //   setTasks([...tasks]);
  // }

   
  return (
    <div className="App">
      <Navbar></Navbar>
      
        <label>ToDo Lfffist
          <input type="text" value={inputValue} onChange={newList}/>
        </label>
        
        <button onClick={updateList}>Add Task</button>
        
        {tasks.map((task,index)=>{
          return (<div>
            <span>{task}</span>
            {/* <EditMessage(index) /> */}
            
            <span><input type="text" value={inputValue1} onChange={newList1}/></span>
            <span><button onClick={Edit(index)}>Edit Task</button></span>


            </div>)
        })}
      
    </div>
  );
}

export default AddTask;