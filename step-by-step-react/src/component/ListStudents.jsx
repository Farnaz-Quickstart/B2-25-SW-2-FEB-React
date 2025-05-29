import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';


function ListStudents({students}) {
  console.log (students)
  return (
    <>

      {/* <h2>Using Unorder List</h2>
      <ul>
        {students.map((student,index)=>(<li key={index}>{student.firstName}</li>))}
      </ul> */}

      <ListGroup>
        {students.map((student,index)=>(
          <ListGroup.Item>{student.firstName}</ListGroup.Item>
        ))}
      </ListGroup>
    </>
  )
}


export default ListStudents;
