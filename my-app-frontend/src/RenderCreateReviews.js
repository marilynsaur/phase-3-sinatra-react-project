import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './App.css';



const RenderCreateReviews = ({addReview,onereview}) => {
    const [isVisible,setIsVisible] = useState(false);
    const [bookReview, setBookReview] = useState([]);
   
    
    

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
      
      

      function handleChange(event) {
        event.preventDefault();
        setFormData({
          ...formData,
          [event.target.id]: event.target.value,
         
        });
        // setFormData(event.target.value);
        console.log(formData)
      }
    
      function handleSubmit(event) {
        event.preventDefault();
    
        const itemData = {
        "score":formData.score,
        "book_review":formData.book_review,
        "book_id":formData.book_id,
        "user_id":formData.user_id
        };
    
        fetch(`http://localhost:9292/reviews${onereview.user_id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(itemData),
        })
        .then((r) => r.json())
        .then((newNewReview) => addReview(newNewReview));
      }

      
    


  
    return(
        <div className="book" >
           
            <form  onSubmit={handleSubmit}>
 
 
 <label >Soooooore:</label>
 <input id="score" value={formData.score}
       onChange={handleChange}name="score"/>
     <br/>


 <label >book review:</label>
 <input type="text" id="book_review" value={formData.book_review}
  onChange={handleChange}  name="book_review"/>
    <br/>
  <br/>
 <button type="submit"onClick={visibleHandleClick}>Add A Review</button>
 <div  style={{visibility:isVisible ? 'visible':'hidden'}}>
   <div >{formData.score}</div>
   <div>{formData.book_review}</div>
   </div>
 </form>

 <div>{onereview.book_review}</div>
 <div>{onereview.score}</div>

        </div>
          )};
       
 
 
       
        
   


export default RenderCreateReviews;