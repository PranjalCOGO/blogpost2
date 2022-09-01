import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About';
import Test from './Test';
import Abouttest from './Abouttest';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Routes
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<App />}>
    </Route>
    <Route exact path="/test" element={<Test />}>
    </Route>
    <Route  path="/About/:id" element={<About />}>
    </Route>
    <Route exact path="/About/test" element={<Abouttest />}>
    </Route>

  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
