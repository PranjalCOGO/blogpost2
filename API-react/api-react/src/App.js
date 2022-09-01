import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


import { Link, useParams } from 'react-router-dom';







function App() {

  
  const mp={'t':{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}, 'n':{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}};
  const [ob, setOb] =useState({})
  
  const [movies,setMovies]= useState([])
  const[str, setStr]=useState("")
  //setMovies(mp)
  //useEffect(function(){setOb(mp)},[])
  console.log(ob)






  
  
    
  
  
  
  const getMovies = async () => {
    const moviesData = await axios.get("https://www.omdbapi.com/?apikey=8d6f0e54&s="+str)
    setMovies(moviesData.data.Search);
    console.log(moviesData)
  }
  


  const tooshort =  () =>{
    return(
      <div>NOT fount</div>
    );

  }
//  function Butt()
//  {
//   if(str<3){
//     return <button onClick={getMovies}>Search</button>
//   }
//   return(
//     // <button onClick={tooshort}>Search</button>
//   ) 
//  }
  
  
  return (
    <div className="App">
      <div>
      <div><Link to={"/about"}>About</Link></div>
      <div><Link to={"/test"}>test</Link></div>

      </div>
      
      
      <input
            type="text"
            id="message"
            name="message"
            onChange={event => setStr(event.target.value)}
            value={str}
        />
        <button onClick={getMovies}>Search</button>
        
      {movies?.map(movie=>{
        
        return (
          <div>
            <h3>{movie.Title}</h3>
            <Link to={"/about/"+movie.imdbID} /*onClick={Datamo(movie.imdbId)}*/><img src={movie.Poster} alt="" /></Link>
          </div>
        );
      })}
      
    </div>
  ); 
}

export default App;
