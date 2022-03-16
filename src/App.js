import "./App.css";
import React from "react";
import Top from "./Header/Top";
import Home from "../src/Components/Home";
import Tourism from "../src/Components/Tourism";
import Fitness from "../src/Components/Fitness";
import Technology from "../src/Components/Technology";
import Food from "../src/Components/Food";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DataState from "./Context/DataState";
import Article from "./Components/Article";


function App() {
  return (
    <>
    <DataState>
    <div className="App">
     <Router>
     <Top/>
     <Routes>
     <Route path="/home"  element={<Home/>}/>
     <Route path="/tourism"  element={<Tourism/>}/>
     <Route path="/fitness"  element={<Fitness/>}/>
     <Route path="/technology"  element={<Technology/>}/>
     <Route path="/food"  element={<Food/>}/>
     <Route path="/article/:id" element={<Article/>} />
    
     </Routes>
     </Router>
    </div>
    </DataState>
    </>
  );
}

export default App;
