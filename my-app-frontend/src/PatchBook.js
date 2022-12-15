import React, { useState} from "react";
import './App.css';


const PatchBook = ({onUpdateItem,book}) => {
   
      
    const [editFormPatch, setEditFormPatch] = useState({
   
        title: "",
        image: ""
      })
    

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
            .then((up) => onUpdateItem(up))
    }
   
    function handleChangePatch(event) {
        event.preventDefault();
        setEditFormPatch({
        ...editFormPatch,
        [event.target.name]: event.target.value
      
        })
       
       }


    return(
        <div>
    <form onSubmit={handleSubmitPatch}>
    <input type="text" name="title" value={editFormPatch.title}  placeholder=" title here" onChange={handleChangePatch}/>
    <input type="text" name="image" value={editFormPatch.image}  placeholder=" Book image here" onChange={handleChangePatch}/>
    <button type="submit">Edit Book</button>
    
   
   
    </form>
        </div>
    );
};

export default PatchBook;