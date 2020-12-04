import React from 'react'
import styled from "styled-components"
// styled button called El
const El= styled.button`
background:  #bada55;

  `

export default function Button({children}) {
    return (
        // see stylled button
        <El className="Button">
            {children}
        </El>
    )
}
