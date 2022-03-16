import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Table from './components/Table';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import { useState } from 'react';
import {Context}  from './index'
import React from 'react'
function App() {

  const [state, setState] = useState([]);

  const [value,setvalue] = useState({fname:'',lname:'',state:''})
  const handleChange = (e)=>{
    setvalue({...value,[e.target.name]:e.target.value})
  }
  const handleAdd = () => {
      setState([...state,value])
  };
  return (
    <>
      <Context.Provider value={{state}}>
    <BrowserRouter>
    <Routes>

   <Route path="/" element={<Dashboard/>}>
     <Route path="/" element={<Table state={state} value={value} handleChange={handleChange} handleAdd={handleAdd}/>}> 
     </Route>
     <Route path="/register" element={<Register/>}> 
     </Route>
   </Route>

  
   </Routes>

    </BrowserRouter>
    </Context.Provider>
    </>
  );
}

export default App;
