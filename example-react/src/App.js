import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import News from './News';
import About from './About';
import { useState } from 'react';
import Flashcard from './Flashcard'
import LL from './ll';
import AddTask from './AddTask';

 

function App() {

  const [task, setTask] = useState(["kk","kk","gg"])
  return (
    <div className="App">
      <Navbar />
      <Home />
      <News />
      <Contact />
      <About />
      <AddTask /> 
      <Footer /> 
    {/* <Flashcard /> */}
    </div>
  );
}

export default App;
