import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Pocetna from './components/pocetna';
import Form from "./components/Form";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Pocetna}></Route>
          <Route path="/form" exact Component={Form}></Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
