import React, { useState, useContext } from 'react';
import { useGet } from "../Hooks/API.js"
import styled from "styled-components";
import {EmplContext} from '../context/EmplContext'
import Button from './Button'
const El = styled.table`
  background: #316;
  color: #bada55;
  text-align: center;
  padding: 10px;
  width: 100%;
`;

export default function Table() {
  // https://randomuser.me/documentation#howto used to get emlloyee
  
  const [url] = useState("https://randomuser.me/api/?results=30");
  //  hook used for getting the employees from the api and storing the sort functions
  const { sortFunc } = useGet(url);
  // contains the employees to display in the table
  const { displayedEmployees } = useContext(EmplContext);

  return (
    <El>
      <thead>
        <tr>
          <td onClick={() => sortFunc("name")}>
            <Button>First Name</Button>
          </td>
          
          <td onClick={() => sortFunc("Lname")} ><Button>Last Name</Button></td>
          
          
          <td>Gender</td>
          <td>E-mail</td>
          <td onClick={() => sortFunc("age")}>
            <Button>Age</Button>
          </td>
        </tr>
      </thead>
      <tbody>
        {displayedEmployees.map((employee) => {
          return (
            <tr key={employee.login.uuid}>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
            
              <td>{employee.gender}</td>
              <td>{employee.email}</td>
              <td>{employee.dob.age}</td>
            </tr>
          );
        })}
      </tbody>
    </El>
  );
}
