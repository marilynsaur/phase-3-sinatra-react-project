import React,{useState} from "react";
import App from "./App";



function SearchBar({search,setSearch}){


 const handler = (e) => {
    e.preventDefault();
    setSearch(e.target.value)
    console.log(e.target.value )
 }


    return (
<div className="book">
 
  
    <input onChange={handler}></input>
    <button type="submit"></button>
    <h3>Search book here</h3>
</div>


    );
}

export default SearchBar;
