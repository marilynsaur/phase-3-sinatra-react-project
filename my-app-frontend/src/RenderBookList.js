import React, { useEffect, useState} from "react";
import './App.css';
import { Link } from "react-router-dom";
import Favorite from "./Favorite";
import BookOrder from "./BookOrder";



function RenderBookList({onebook,handleClick,handleFavClick,onAddItem,addFavorite,onUpdateItem,onAddReview,onDeleteItem,onDeleteReview,onereview,setReviews,reviews,items}) {
  const [book, setBook] = useState(null);
  const [formReview, setFormReview] = useState({
    score:"",
    book_review:"",
  });
  const [editFormPatch, setEditFormPatch] = useState({
   
    title: "",
    image: ""
  })

  
useEffect(() => {
    fetch(`http://localhost:9292/books/${onebook.id}`)
      .then((r) => r.json())
      .then((book) => setBook(book));
  });

  if (!book) return <h2>Loading book data...</h2>;
 
  
  
 
  


   
   
 

  
  function handleSubmitPatch(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/books/${book.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(editFormPatch),
    })
        .then(resp => resp.json())
        .then(up => {
          onUpdateItem(up)})
}


function handleDeleteClick() {
  fetch(`http://localhost:9292/books/${book.id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then((deletebook) => onDeleteItem(deletebook));
}






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
  "book_id":onebook.id
  };



function handleChangePostReview(e) {
  e.preventDefault();
  setFormReview({
  ...formReview,
  [e.target.name]: e.target.value

  })
  console.log(e.target.value )
}


   
 function handleChangePatch(e) {
  e.preventDefault();
  setEditFormPatch({
  ...editFormPatch,
  [e.target.name]: e.target.value

  })
  console.log(e.target.value )
 }



 
   
    

 
return (
  
  <div>
      

     <div className="book">
   <br/>
 
<button onClick={handleDeleteClick}>X</button>
<div key={book.id} >
<div><h3>{book.id}</h3></div>
  <div><h3>{book.title}</h3></div>
  <img src={book.image} alt=""/>
  <br></br>
   <Link to="/favorite">     
   <button onClick={() => addFavorite(book.id)}>Details of the book</button>
    </Link>
  <div><h3>{book.book_review}</h3></div>
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
  <form onSubmit={handleSubmitPatch}>
    <input type="text" name="title" value={editFormPatch.title} onChange={handleChangePatch}/>
    <input type="text" name="image" value={editFormPatch.image} onChange={handleChangePatch}/>
    <button type="submit">Edit Book</button>
  </form>
  </div> 
  </div>
  </div> 
  </div>

    
  );
}
       



export default RenderBookList;




     