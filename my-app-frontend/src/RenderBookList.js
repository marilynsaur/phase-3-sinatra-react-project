import React, { useEffect, useState} from "react";
import './App.css';
import { Link } from "react-router-dom";
import Favorite from "./Favorite";
import BookOrder from "./BookOrder";
import DeleteBook from "./DeleteBook";
import PatchBook from "./PatchBook";



function RenderBookList({onebook,handleClick,addFavorite,onUpdateItem,onAddReview,onDeleteItem}) {
  const [book, setBook] = useState(onebook);
  console.log(onebook);
  const [formReview, setFormReview] = useState({
    score:"",
    book_review:"",
    book_id:""
  });
    


function handleSubmitPostReview(e) {
  e.preventDefault();
  
  fetch("http://localhost:9292/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reviewData),
  })
    .then((r) => r.json())
    .then((newReview) => onAddReview(newReview));
}

const reviewData = {
  "score":formReview.score,
  "book_review":formReview.book_review,
  "book_id":book.id
  };



function handleChangePostReview(e) {
  e.preventDefault();
  setFormReview({
  ...formReview,
  [e.target.name]: e.target.value

  })
  
}

return (
  
  <div>
      

     <div className="book">
   <br/>
 

  <DeleteBook onDeleteItem={onDeleteItem} book={book}/>
<div key={book.id} >

  <div><h3>{onebook.title}</h3></div>
  <img src={onebook.image} alt=""/>
  
  <br></br>
  
   <Link to="/favorite">     
   <button onClick={() => addFavorite(book.id)}>Details of the book</button>
    </Link>
  
   <br/> 
  <div>
  <br/>
 
  <form  onSubmit={handleSubmitPostReview}>
  <label >Score:</label>
  <input id="score" value={reviewData.score} onChange={handleChangePostReview}name="score"/>
 <br/>
 <label >book review:</label>
 <input type="text" id="book_review" value={reviewData.book_review}
  onChange={handleChangePostReview}  name="book_review"/>
  <br/>
  <br/>
 <button type="submit">Add A Review</button>
 <div >
   <div >{reviewData.score}</div>
   <div>{reviewData.book_review}</div>
   
   </div>
 </form>
 
  <br/> 
   <br/>
  <PatchBook onUpdateItem={onUpdateItem} book={book}/>
  </div> 
  </div>
  </div> 
  {book.reviews.map((review) => (
       
           <div  key={review.id}>
          <p>Book Review: {review.book_review}</p>
        </div>
      ))}
  </div>

    
  );
}
       



export default RenderBookList;




     