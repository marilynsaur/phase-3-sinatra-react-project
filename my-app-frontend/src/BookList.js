import React, { useEffect, useState } from "react";
import './App.css';
import SearchBar from './SearchBar';
import RenderBookList from "./RenderBookList";
import BookOrder from "./BookOrder";



const BookList = ({items,onAddItem,handleDeleteItem,handleDeleteReview,handleAddReview,addToFavorite,onUpdateItem,reviews,filteredReview}) => {
  console.log(reviews)
  const [search,setSearch]= useState("");
  
  
  
  
   
    const filteredBook = items.filter(item=> item.title.toLowerCase().includes(search.toLowerCase()));
    
    const bookitems = filteredBook.map(book => <RenderBookList onebook={book}  key={book.id} onDeleteItem={handleDeleteItem} onDeleteReview={handleDeleteReview} onUpdateItem={onUpdateItem} addFavorite={addToFavorite} onAddReview={handleAddReview} onAddItem={onAddItem}/>)
    
    
    
   
   
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