import React, {useState, useContext} from 'react';
import { EmplContext } from '../context/EmplContext.js';
import styled from "styled-components"
const El= styled.input`
background:  #bada55;

  `

export default function Search() {
    const [search, setSearch] = useState("")
    const{employees, setDisplayedEmployees}= useContext(EmplContext)
    
    function updateSearch({target}){
        // just using for readability
        const searchTerm = target.value
        // used for updating the value in the search input, so it always equals exactly what is saved
        setSearch(searchTerm)
        // filters the employees based on first and last name
        const filterResult = employees.filter(function(employee){
            // look at employees my first name and last name etc
            return employee.name.first[0].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||employee.name.last[0].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1  ? true : false
        })
        setDisplayedEmployees([...filterResult])
    }
    // every letter entered triggers the onChange event.
    return(
       <El type="text" onChange= {updateSearch} value={search}></El>
    )
}


