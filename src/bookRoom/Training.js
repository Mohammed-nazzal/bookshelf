import React, { Component } from "react";
import ReactDOM from "react-dom";


function Training(){

    function clickHandler(){
        console.log('Button is clicked')
      }


    return(
    <div>

        <button onClick={clickHandler}>Click</button>

  </div>
  
    );
}



export default Training;



