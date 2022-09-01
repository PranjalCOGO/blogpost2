// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import React from 'react';
import axios from 'axios'
import { useEffect } from 'react';
// import ConfettiGenerator from "confetti-js";
import Confetti from "react-confetti"
// import useWindowSize from './useWindowSize';


function App() {

  const [message, setMessage]=useState("")
  const [movies,setMovies]=useState([])

  // function HandleChange(event){
  //   setMessage(event.target.value)
  // }

  // React.useEffect(() => {
  //   const confettiSettings = { target: 'my-canvas' };
  //   const confetti = new ConfettiGenerator(confettiSettings);
  //   confetti.render();
   
  //   return () => confetti.clear();
  // }, []) // add the var dependencies or not

  const k ={"movieid":4,"year":1896,"name":"tron","plot":"fast"}
  let config = {
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': 'http://localhost:3001/',
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Methods": 'POST, GET, OPTIONS'

      }
    }
    
  
    
  const getMovies = async () => {
    
    const moviesData = await axios.get("http://[::1]:3000/movies",config)
    axios.post("http://[::1]:3000/movies",k)
    setMovies(moviesData.data);
    console.log(moviesData)
  }
  // const { width, height } = useWindowSize();


  return (
    <div className="App">
      {/* <label>
        Search
        <input
        type="text"
        vaule={message}
        onChange={(event)=>{setMessage(event.target.value)}}
        />
        <button onClick={getMovies}>Clickme</button>
        {movies.map((task)=>{
          return (
            <div>{task.name}</div>
          )
        })}

        
        
      </label> */}
      <Confetti
      width={1400}
      height={1400}
    />



      
    </div>
  );
}

export default App;
