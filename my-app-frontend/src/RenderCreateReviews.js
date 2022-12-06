import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './App.css';



const RenderCreateReviews = ({onAddReview,onebook,onereview,onDeleteReview}) => {
    const [isVisible,setIsVisible] = useState(false);
   
    const [review, setReview] = useState("");
  const [score, setScore] = useState("0");
 
  const [formReview, setFormReview] = useState({
    score:"",
    book_review:"",
     
  });
   
  function handleDeleteClick() {
    fetch(`http://localhost:9292/reviews/${onereview.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedReview) => onDeleteReview(deletedReview));
  }



    
    

  const visibleHandleClick = event => {
    setIsVisible(current => !current);
  };
  
    const [formData, setFormData] = useState({
        score:"",
        book_review:"",
        
        
      });

      // function handleAdd(){
      //   bookReview.push({
      //     [formData.book_review]: formData.book_review
      //   });
      // }
      function handleChange(e) {
        e.preventDefault();
        setFormReview({
        ...formReview,
        [e.target.name]: e.target.value
      
        })
        console.log(e.target.value )
      }



      

      
    
      function handleSubmit(event) {
        event.preventDefault();
    
        
        
    
        fetch("http://localhost:9292/reviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reviewData),
        })
        .then((r) => r.json())
        .then((newNewReview) => onAddReview(newNewReview));
      }

      
      const reviewData = {
        "score":formReview.score,
        "book_review":formReview.book_review,
        "book_id":onebook.id
        };
      
    

  
    return(
        <div className="book" >
           <button onClick={handleDeleteClick}>Delete Review</button>
            <form  onSubmit={handleSubmit}>
           
 
 <label >Score:</label>
 <input id="score" value={reviewData.score}
       onChange={handleChange}name="score"/>
     <br/>


 <label >book review:</label>
 <input type="text" id="book_review" value={reviewData.book_review}
  onChange={handleChange}  name="book_review"/>
    <br/>
  <br/>
 <button type="submit"onClick={visibleHandleClick}>Add A Review</button>
 <div  style={{visibility:isVisible ? 'visible':'hidden'}}>
   <div >{reviewData.score}</div>
   <div>{reviewData.book_review}</div>
   </div>
 </form>

 <div>{onereview.book_review}</div>
 <div>{onereview.score}</div>

        </div>
          );
       
 
    }


  
       
        
   


export default RenderCreateReviews;