
import React, { useEffect, useState } from "react";
import {  Route, Switch } from "react-router-dom";
import BookList from "./BookList";
import Favorite from "./Favorite";
import Footer from "./Footer";
import BookOrder  from "./BookOrder";
import NavBar from "./NavBar";



import './App.css';



function App() {
 
  const [items, setItems] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [findBookID,setfindBookID ] = useState([]);
 
  
   
  
    
    useEffect(() => {
        fetch("http://localhost:9292/reviews")
          .then((r) => r.json())
          .then((reviews) => setReviews(reviews));
      }, []);
       
    console.log(reviews)
  

  

  
  useEffect(() => {
    fetch("http://localhost:9292/books")
      .then((r) => r.json())
      .then((items) => setItems(items));
  }, []);
   
console.log(items)




function onUpdateItem(updatedItem) {
  const updatedItems = items.map(
   item => {
      if (item.id === updatedItem.id) {
        return updatedItem
      } else {return item}
    }
  )
  setItems(updatedItems)
}





  
  const addToFavorite = id => {
    if (!favorite.includes(id)) setFavorite(favorite.concat(id));
    console.log(id);
  };

 

  let findfavorite = items.filter(item => favorite.includes(item.id));


  const removeFavorite = id => {
    let index = favorite.indexOf(id);
    console.log(index);
    let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
    setFavorite(temp);
  };
  

  function handleDeleteReview(deletedReview) {
    const updatedReviews = reviews.filter((review) => review.id !== deletedReview.id);
    setReviews(updatedReviews);
  }



  function handleDeleteItem(deletedItem) {
    const updatedItems = items.filter((item) => item.id !== deletedItem.id);
    setItems(updatedItems);
  }

  function handleAddItem(newItem) {
    console.log("a new item:", newItem);
    let allItems=[...items,newItem]
    setItems(allItems)
  }

  function handleAddReview(newReview) {
    console.log("a new Review:", newReview);
    let allReviews=[...reviews,newReview]
    setReviews(allReviews)
  }
  
  const filteredReview = items.filter(item=> item.title);
  
 

  return (
    <div>
      <NavBar/>
      <Switch>
      <Route exact path="/">
        <BookList items ={items} handleDeleteItem={handleDeleteItem} handleDeleteReview={handleDeleteReview} addToFavorite={addToFavorite} onUpdateItem={onUpdateItem} reviews={reviews} filteredReview={filteredReview} handleAddReview={handleAddReview} />
        </Route>
        <Route exact path="/Favorite" items={items}>
          <Favorite addToFavorite={addToFavorite} onAddItem={handleAddItem} findfavorite={findfavorite} removeFavorite={removeFavorite}/>
        </Route>
        <Route exact path="/BookOrder">
          <BookOrder onAddItem={handleAddItem} />
        </Route>
      </Switch>
      <Footer />
      
    </div>
  );
  
}

export default App;






