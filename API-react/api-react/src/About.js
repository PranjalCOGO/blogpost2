import { Link, useParams } from 'react-router-dom';
import "./App.css"
import axios from 'axios';
import { useEffect, useState } from 'react';



function About()
{
    const [movies,setMovies]= useState("")


  
  
    
  
    let { id } = useParams();
    console.log(id  )
  
  const getMovies = async () => {
    const moviesData = await axios.get("https://www.omdbapi.com/?apikey=8d6f0e54&i="+id)
    setMovies(moviesData.data);
    console.log(moviesData.data)
  }

  useEffect(function(){
    getMovies();
  },[])
    
    return(
        <div className='App'>
            <div>{movies.Title}</div>
            <div><img src={movies.Poster} alt="" /></div>
            <div>{movies.Plot}</div>
            
            
          </div>
        );
    
            
        


}
export default About;