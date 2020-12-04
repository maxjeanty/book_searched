
import React from 'react'
import styled from "styled-components"
import Search from './Search'
const El= styled.header`
background: #316;
color: #fff;
text-align:center;
padding: 10px;
border-bottom: 5px solid white;
  `

export default function Header() {
    return (
      <El>

        <h1> Employee Directory</h1>
        <Search></Search>
      </El>
    )
}
