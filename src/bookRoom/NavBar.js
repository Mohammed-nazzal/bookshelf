
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchIcon from '@mui/icons-material/Search';
import './NavBar.css';

function NavBar(){




return(

  
<div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#about">Categories</a>
  <a href="#contact">Plans</a>
  <a href="#contact">Room</a>
  <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit"><SearchIcon/></button>
    </form>
    <a href="#LogOut">Log out</a>
  </div>
</div>

);

}


export default NavBar ;
