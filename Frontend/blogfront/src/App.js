// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import axios from 'axios'

function App() {

  const [title, setTitle]=useState("")
  const [content,setContent]=useState("")
  const [movies,setMovies]=useState([])
  const [t,setT]=useState(false)
  const [message, setMessage]=useState("")

  // function HandleChange(event){
  //   setMessage(event.target.value)
  // }
  // const k ={"movieid":4,"year":1896,"name":"tron","plot":"fast"}
  // let config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //     'Access-Control-Allow-Origin': 'http://localhost:3001/',
  //     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
  //     "Access-Control-Allow-Methods": 'POST, GET, OPTIONS'

  //     }
  //   }
    
  
    
  const getMovies = async () => {
    
    const moviesData = await axios.get("http://[::1]:3000/search?title="+message)
    //axios.post("http://[::1]:3000/movies")
    setMovies(moviesData.data);
    console.log(movies)
  }
  function Add(){
    return(
      <div>
        <label>
        <input
        type="text"
        vaule={title}
        onChange={(event)=>{setTitle(event.target.value)}}
        />
        </label>
        <label>content
        <input
        type="text"
        vaule={content}
        onChange={(event)=>{setContent(event.target.value)}}
        />
        </label>
        
        
      </div>
    )
  }

  const [k,setK]=useState()

  return (
    <div className="App">
      <label>
        {/* <button onClick={()=>{setT(true)}}>Add</button>
        <button onClick={getMovies}>home</button>
        {t && <Add />} */}


        
        
      </label>
      <label>
        <input
        type="text"
        vaule={message}
        onChange={(event)=>{setMessage(event.target.value)}}
        />
      </label> 
      <button onClick={getMovies}>searchTitle</button> 
        <div>
        {
          movies.map((task)=>{
            return (
                      <div>
                        <div>{task.title}</div>
                        <div>
                          <img src={task.img}/>
                        </div>
                        <div>{task.content}</div>
                        <div>--------------</div>
                      </div>
                      
            )
          })
        }
        </div>
    </div>
  );
}

export default App;
