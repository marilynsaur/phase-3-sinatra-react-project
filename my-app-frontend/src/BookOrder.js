import React, { useEffect, useState } from "react";
import './App.css';


const BookOrder = ({onAddItem,unoBook}) => {
  const [isVisible,setIsVisible] = useState(false);
 

  const visibleHandleClick = event => {
    setIsVisible(current => !current);
  };
  
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        id: "",
      
        
      });

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
    
       
    
        fetch(`http://localhost:9292/books/${unoBook.id}`, {
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
        "title":formData.title,
        "image":formData.image,
        "id":formData.id
        };
    return(
      <div>
        <div className="book">
        <h2>Not seeing a book you want? let us order one for you</h2>
        <br></br>
        <br></br>
   <form  className="App"onSubmit={handleSubmit}>
   <label >title:</label>
   <input type="text"id="title" value={formData.title}
         onChange={handleChange}name="title"/>
       <br/>
   <label >image:</label>
   <input type="text" id="image" value={formData.image}
    onChange={handleChange} name="image"/>
    
    <br/>
   
    <br/>
   <button type="submit"onClick={visibleHandleClick}>Add A Book</button>
   <div  style={{visibility:isVisible ? 'visible':'hidden'}}>
     <div >{formData.title}</div>
     <img src={formData.image}/>
     </div>
   </form>
 
 
 
 
    
    
  
 
  
 </div>
 </div>
 
 
    );
};

export default  BookOrder ;


