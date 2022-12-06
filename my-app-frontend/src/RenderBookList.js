import React, { useEffect, useState} from "react";
import './App.css';
import { Link } from "react-router-dom";
import RenderCreateReviews from "./RenderCreateReviews";




function RenderBookList({onebook,addFavorite,onUpdateItem,onAddReview,onDeleteItem,onDeleteReview,onereview,setReviews,reviews,items}) {
  const [book, setBook] = useState(null);
  // const [review, setReview] = useState("");
  // const [score, setScore] = useState("0");
 
  // const [formReview, setFormReview] = useState({
  //   score:"",
  //   book_review:"",
     
  // });

 
  const [editForm, setEditForm] = useState({
    id: "",
    title: "",
    image: ""
  })

  
 

  

 
  useEffect(() => {
    fetch(`http://localhost:9292/books/${onebook.id}`)
      .then((r) => r.json())
      .then((book) => setBook(book));
  }, [onebook.id]);

  if (!book) return <h2>Loading book data...</h2>;
  
  
 
  


   
   
  function handleDeleteClick() {
    fetch(`http://localhost:9292/books/${book.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletebook) => onDeleteItem(deletebook));
  }

  
  function handleSubmit(e) {

    
    e.preventDefault();
    fetch(`http://localhost:9292/books/${book.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(editForm),
    })
        .then(resp => resp.json())
        .then(up => {
          onUpdateItem(up)})
}


// function handleSubmitPost(e) {
//   e.preventDefault();
//   fetch("http://localhost:9292/reviews", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(reviewData),
//   })
//     .then((r) => r.json())
//     .then((newReview) => onAddReview(newReview));
// }

// const reviewData = {
//   "score":formReview.score,
//   "book_review":formReview.book_review,
//   "book_id":onebook.id
//   };

// function handleChangeTwo(e) {
//   e.preventDefault();
//   setFormReview({
//   ...formReview,
//   [e.target.name]: e.target.value

//   })
//   console.log(e.target.value )
// }


   
 function handleChange(e) {
  e.preventDefault();
  setEditForm({
  ...editForm,
  [e.target.name]: e.target.value

  })
  console.log(e.target.value )
 }


   



const mapOverMaps = book.reviews.map(review => <RenderCreateReviews onereview={review}  key={review.id} onebook={onebook} onAddReview={onAddReview} onDeleteReview={onDeleteReview}/>)

return (
  
  <div>
     <div className="book">
   <br/>

<button onClick={handleDeleteClick}>X</button>
<div key={book.id} >
<div><h3>{book.id}</h3></div>
  <div><h3>{book.title}</h3></div>

  <br></br>
   <Link to="/favorite">
             <img src={book.image} alt=""/>
           
             <button onClick={() => addFavorite(book.id)}>Details of the book</button>
        </Link>
      
        {mapOverMaps}
        <div><h3>{book.book_review}</h3></div>
  <div>
 
  
  <br/> 
   <br/>
  <form onSubmit={handleSubmit}>
    <input type="text" name="title" value={editForm.title} onChange={handleChange}/>
    <input type="text" name="image" value={editForm.image} onChange={handleChange}/>
          <button type="submit">Edit</button>
        
            </form>
            
           
  </div> 
  </div>
  
 
  </div> 
  </div>

    
  );
}
       



export default RenderBookList;




     