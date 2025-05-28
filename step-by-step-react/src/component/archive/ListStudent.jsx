import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
// Reference: https://www.w3schools.com/jsref/jsref_map.asp

export default function ListStudent( {students, setStudents} ) {
  const [searchState, setSearchState] = useState("")

  const ingredients = ["Cheese", "Cheese", "Cheese"];
  const pizza = ingredients.map ((ingredient)=>"pizza " + ingredient)
  console.log (pizza)

  function handleSearch () {
    console.log (searchState)
    const result = students.filter((student)=>student.firstName.toLowerCase().includes(searchState.toLowerCase()))
    setStudents(result)
  }

  return (
    <>
    <InputGroup className="mb-3">
      <InputGroup.Text>First name</InputGroup.Text>
      <Form.Control aria-label="First name" onChange={(event)=>setSearchState(event.target.value)} />
      <Button variant="outline-secondary" id="button-addon1" onClick={handleSearch}>
          SEARCH
        </Button>
    </InputGroup>
    <ul>
      {
        students.map((student,index)=>(
          <li key={index}>{student.firstName}, {student.lastName}</li>
        ))
      }
    </ul>
    </>
    
  )
}
