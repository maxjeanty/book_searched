import React,{useContext, useState} from 'react';
import Axios from 'axios';

import {BookContext} from '../context/BookContext'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Search(){


  const [searchTerm, setSearchTerm] = useState("")

  const [results, setResults] = useContext(BookContext)
  
    // const [state, setstate] = useState({
    //   searchTerm: '',
    //   results: []
    // })
    
    
    
      function handleTyping(e){
    //    update everyserch
        // setstate({...state, searchTerm: e.target.value})
        setSearchTerm(e.target.value)

      }
    
      function handleClick(e){
       
    
    
        var url = "https://www.googleapis.com/books/v1/volumes?q="+searchTerm+"+&key=AIzaSyCqDOGjCukY8qUJ8vMwUD9dQXWAgw7ld8Y"
    //    axios call
        Axios.get(url).then(function(GoogleBooks){
          
          // setstate({...state, results: GoogleBooks.data.items})
          setResults([...GoogleBooks.data.items]
            )


        })
      }
    
      function favButton(bookToSave){
        console.log("we got Clicked", bookToSave);
        Axios.post("/savedbooks", bookToSave).then(function(response){
          console.log("The route");
        })
    
      }
    
      return (
        <div className="App">
        
          
          <input onChange={handleTyping} type="text"></input>
          <button onClick={handleClick} class>Search </button>
    
          {results.map((book)=>{
            
            return (
            <div className="grid-item">
              <h2>{book.volumeInfo.title}</h2>
              <button onClick={() =>{favButton(book)}}>❤
              </button>
            
            </div>)
          })}
    
    
        </div>
      );
    }
    

export default Search
