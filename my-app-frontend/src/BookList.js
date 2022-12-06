import React, { useEffect, useState } from "react";
import './App.css';
import SearchBar from './SearchBar';
import RenderBookList from "./RenderBookList";
import CreateReviews from "./CreateReviews";
// import AppContextProvider, { useAppContext } from "./AppContext";


const BookList = ({items,handleDeleteItem,handleAddReview,addToFavorite,onUpdateItem,reviews,filteredReview}) => {
  console.log(reviews)
  const [search,setSearch]= useState("");
  
  
  
  
   
    const filteredBook = items.filter(item=> item.title.toLowerCase().includes(search.toLowerCase()));
    
    const bookitems = filteredBook.map(book => <RenderBookList onebook={book}  key={book.id} onDeleteItem={handleDeleteItem} onUpdateItem={onUpdateItem} addFavorite={addToFavorite} onAddReview={handleAddReview}/>)
    
    const reviewitems = filteredReview.map(review => <createReviews onereview={review}  key={review.id} />)

    
   
   
    return(
        <div >
         
        
          < CreateReviews reviewitems={reviewitems} bookitems={bookitems}/>
          < SearchBar search={search} setSearch={setSearch}/>
          <br></br>
          <div className="book-grid">
         
          {bookitems}
         
         </div>
 
 
 
            </div>
          )};
       
 
 
       
        
   


export default BookList;