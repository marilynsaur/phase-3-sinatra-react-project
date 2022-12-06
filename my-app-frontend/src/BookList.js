import React, { useEffect, useState } from "react";
import './App.css';
import SearchBar from './SearchBar';
import RenderBookList from "./RenderBookList";



const BookList = ({items,handleDeleteItem,handleDeleteReview,handleAddReview,addToFavorite,onUpdateItem,reviews,filteredReview}) => {
  console.log(reviews)
  const [search,setSearch]= useState("");
  
  
  
  
   
    const filteredBook = items.filter(item=> item.title.toLowerCase().includes(search.toLowerCase()));
    
    const bookitems = filteredBook.map(book => <RenderBookList onebook={book}  key={book.id} onDeleteItem={handleDeleteItem} onDeleteReview={handleDeleteReview} onUpdateItem={onUpdateItem} addFavorite={addToFavorite} onAddReview={handleAddReview}/>)
    
    
    
   
   
    return(
        <div >
         
        
       
          < SearchBar search={search} setSearch={setSearch}/>
          <br></br>
          <div className="book-grid">
         
          {bookitems}
         
         </div>
 
 
 
            </div>
          )};
       
 
 
       
        
   


export default BookList;