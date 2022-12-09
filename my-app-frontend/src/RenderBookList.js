import React, { useEffect, useState} from "react";
import './App.css';
import { Link } from "react-router-dom";
import Favorite from "./Favorite";
// import RenderCreateReviews from "./RenderCreateReviews";



function RenderBookList({onebook,onAddItem,addFavorite,onUpdateItem,onAddReview,onDeleteItem,onDeleteReview,onereview,setReviews,reviews,items}) {
  const [book, setBook] = useState(null);
  const [review, setReview] = useState("");
  const [score, setScore] = useState("0");
  const [isVisible,setIsVisible] = useState(false);

  const visibleHandleClick = event => {
    setIsVisible(current => !current);
  };
 
  const [formReview, setFormReview] = useState({
    score:"",
    book_review:"",
     
  });

 
  const [editFormPatch, setEditFormPatch] = useState({
    id: "",
    title: "",
    image: ""
  })

  const [dataBook, setDataBook] = useState({
    title: "",
    image: "",
    id: "",
  
    
  });


  
 

  

 
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



 
   
     function handleChangePostBook(event) {
       event.preventDefault();
       setDataBook({
         ...dataBook,
         [event.target.id]: event.target.value,
        
       });
       // setFormData(event.target.value);
       console.log(dataBook)
     }
   
     function handleSubmitPostBook(event) {
       event.preventDefault();
       
       fetch(`http://localhost:9292/books/${book.id}`, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(itemData),
       })
       .then((r) => r.json())
       .then((newNewItem) => onAddItem(newNewItem));
     }

     const itemData = {
      "title":dataBook.title,
      "image":dataBook.image,
      "book_id":dataBook.id
      };

// const mapOverMaps = book.reviews.map(review => <RenderCreateReviews onereview={review}  key={review.id} onebook={onebook} onAddReview={onAddReview} onDeleteReview={onDeleteReview}/>)

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
      
        {/* {mapOverMaps} */}
        <div><h3>{book.book_review}</h3></div>
  <div>
  <form  onSubmit={handleSubmitPostReview}>
            <label >Score:</label>
            <input id="score" value={reviewData.score}
            onChange={handleChangePostReview}name="score"/>
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
 {/* < BookOrder bookitems/> */}
  <br/> 
   <br/>
  <form onSubmit={handleSubmitPatch}>
    <input type="text" name="title" value={editFormPatch.title} onChange={handleChangePatch}/>
    <input type="text" name="image" value={editFormPatch.image} onChange={handleChangePatch}/>
          <button type="submit">Edit</button>
        
            </form>
            



    <form  className="App"onSubmit={handleSubmitPostBook}>
   <label >title:</label>
   <input type="text"id="title" value={dataBook.title}
         onChange={handleChangePostBook}name="title"/>
       <br/>
   <label >image:</label>
   <input type="text" id="image" value={dataBook.image}
    onChange={handleChangePostBook} name="image"/>
    
    <br/>
   
    <br/>
   <button type="submit"onClick={visibleHandleClick}>Add A Book</button>
   <div  style={{visibility:isVisible ? 'visible':'hidden'}}>
     <div >{dataBook.title}</div>
     <img src={dataBook.image}/>
     </div>
   </form>
           
  </div> 
  </div>
  
 
  </div> 
  </div>

    
  );
}
       



export default RenderBookList;




     