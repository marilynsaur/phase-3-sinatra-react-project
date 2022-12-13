import React, { useEffect, useState } from "react";
import './App.css';
import SearchBar from './SearchBar';
import RenderBookList from "./RenderBookList";
import BookOrder from "./BookOrder";




const BookList = ({items,onAddItem,handleDeleteItem,handleClick,handleDeleteReview,handleAddReview,addToFavorite,onUpdateItem,reviews}) => {
  const [search, setSearch] = useState("");
  const filteredReview = items.filter(item=> item.title);
  
  const filteredBook = items.filter(item=> item.title.toLowerCase().includes(search.toLowerCase()));
    
    const bookitems = filteredBook.map(book => <RenderBookList onebook={book}  key={book.id} onDeleteItem={handleDeleteItem} onDeleteReview={handleDeleteReview} onUpdateItem={onUpdateItem} handleClick={handleClick}  addFavorite={addToFavorite} onAddReview={handleAddReview} onAddItem={onAddItem}/>)
  
  
  
  
  
   
   
    
    
    
   
   
    return(
        <div >
         
        
       
          < SearchBar search={search} setSearch={setSearch}/>
          <div className="book-grid">
          { bookitems}
        
          <br></br>
         
          <br></br>
          
        
         
      
         
         </div>
 
 
 
            </div>
          )};
       
 
 
       
        
   


export default BookList;