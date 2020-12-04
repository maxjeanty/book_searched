import {useEffect, useContext} from 'react';
import {EmplContext} from "../context/EmplContext"
import axios from "axios"

export function useGet(url){
    const{employees, setEmployees, displayedEmployees, setDisplayedEmployees} = useContext(EmplContext)

  
    // gets employees from an api, stores them in both employees, and displayed employees. 
    useEffect(()=> {
        async function getEmployees(){
            try {
                const response = await axios.get(url)
                // using employees to store a copy of all the employees that will not be manipulated
                setEmployees(response.data.results)
                // using displayed employees to be a manipulated version of the employees that will be displayed for sorting and filtering.
                setDisplayedEmployees(response.data.results)
            }
            catch (error) {
                console.log("error ocurred getting info from the API: ", error)
            }   
        }
        getEmployees()
    },[])

    // used to decide which sort function to trigger
    function sortFunc(sort){
        switch(sort){
            case "name":
                sortByName()
                break
            case "age":
                sortByAge()
                break
            case "Lname":
                sortByLastName()
                break
            default:
                console.log("sort does not match any cases")
        }
    }

    // sorts the employees based on first name.
    function sortByName(){
         employees.sort(function(a,b){
            if(a.name.first < b.name.first){
                return -1;
            }else{
                return 1;
            }
        })
        // spread, because this creates a new variable, instead of just updating the variable. React will not recognize it as an update if you just update the variable.
        setDisplayedEmployees([...employees])
    }

    // sort by last
    function sortByLastName(){
         employees.sort(function(a,b){
            if(a.name.last < b.name.last){
                return -1;
            }else{
                return 1;
            }
        })
       
        setDisplayedEmployees([...employees])
    }

    // sorts the employees based on age.
    function sortByAge(){
        employees.sort(function(a,b){
            return (a.dob.age - b.dob.age)
        })
        setDisplayedEmployees([...employees])
    }

    return {displayedEmployees, sortFunc}
}