import React, { useState } from "react";
import "../App.css";

// import {Context} from '../index'

//Bootstrap

export default function Table(props) {
  //use of hook for couting
  const {handleChange,handleAdd}  = props;
  return (
  <>
    <div className="app container p-5 text-center" style={{marginTop:"100px"}}>
      <h1 className="p-5 text-center" style={{marginTop:"20px"}}>User Data</h1>
      <table className="table table-hover table-bordered p-5">
        <thead>
          <tr>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">State</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="text" name="fname" onChange={handleChange}/>
            </td>
            <td>
              <input type="text" name="lname" autocomplete="off" onChange={handleChange}/>
            </td>
            <td>
              <input type="text" name="state"  onChange={handleChange}/>
            </td>
          </tr>
        </tbody>
      </table>
      <button type="button" className="btn btn-primary me-3" onClick={handleAdd}>
        Add
      </button>
    </div>
    </>
   
  );
}
