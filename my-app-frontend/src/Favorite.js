import React, { useEffect, useState} from "react";

import './App.css';



    const Favourite = ({addtofavorite,findfavorite,onAddReview,removeFavorite}) => {
        
        
        
         
          
            
        
        return (
            <>
            <br></br>
            <div className="centerList">
            <h1 >Book Details</h1>
           
             {findfavorite.map((fav) => <div  key={fav.id}>
                <br></br><br></br>
                <br></br><br></br>
                <button onClick={() => removeFavorite(fav.id)}>X</button>
               <h3>Title:</h3><h1>{fav.title}</h1>
                <br></br>
                <h3>Author:</h3>
                <br></br>
                <h2>{fav.author}</h2>
                <br></br>
                <h2>Subject:</h2>
                <br></br>
                <h3>{fav.subject}</h3>
                <br></br>
                <h2>Page Count:</h2>
                <h3>{fav.page_count}</h3>
                <img src={fav.image} alt=""/>
                <h2>Reviews:</h2>
                <h3>{fav.reviews.map((c, i) => (
              <div key={i}>
                <h3>{c.score}</h3>
                <h3>{c.book_id}</h3>
                <h4>{c.book_review}</h4>
                <hr />
            
              </div>
              
            ))}</h3></div>
               )}
           </div>
            </>
        );
    };
    
    export default Favourite;



   