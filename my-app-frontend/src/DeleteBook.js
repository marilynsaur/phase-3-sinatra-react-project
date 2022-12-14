import React from 'react';
import './App.css';


const DeleteBook = ({onDeleteItem,book}) => {
    function handleDeleteClick() {
        fetch(`http://localhost:9292/books/${book.id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then((deletebook) => onDeleteItem(deletebook));
      }
    return(
        <div >
               <button onClick={handleDeleteClick}>X</button>
        </div>
    );
};

export default  DeleteBook;