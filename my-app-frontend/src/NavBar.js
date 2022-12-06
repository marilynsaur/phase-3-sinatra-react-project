import React from "react";
import { NavLink } from "react-router-dom";
import App from "./App";




function NavBar() {

  const linkStyles = {
    padding: 0,
    margin: 0,
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    
  };
  
  
  return (
   
    <div className="topnav">
       <header>
    <h1>
                 BOOK APP
              </h1>
    <span>
                Find your favorite book here
              </span>
  </header>
      <div >
      <div   >
      

      <NavLink 
        to="/"
       
       
      >
        BookList
      </NavLink>
      <NavLink 
        to="/Favorite"
      
       
      >
       
      </NavLink>
      <NavLink 
        to="/BookOrder"
      
      >
       Book Order
      </NavLink>
     
    
     
    </div>
    </div>
    </div>
   
  );
}

export default NavBar;