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
   
    function handleChangePatch(e) {
        e.preventDefault();
        setEditFormPatch({
        ...editFormPatch,
        [e.target.name]: e.target.value
      
        })
       
       }


    return(
        <div>
    <form onSubmit={handleSubmitPatch}>
    <input type="text" name="title" value={editFormPatch.title} onChange={handleChangePatch}/>
    <input type="text" name="image" value={editFormPatch.image} onChange={handleChangePatch}/>
    <button type="submit">Edit Book</button>
    </form>
        </div>
    );
};

export default PatchBook;