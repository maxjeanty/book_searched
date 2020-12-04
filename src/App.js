import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import {BookContext} from './context/BookContext'

function App() {
    return (
        <BookContext>
        <div> <h1>HOME</h1>
        <Header/>
        <Body/>
        <Footer/>
        </div>
        
        </BookContext>
        )
}

export default App
