import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ListStudentCard( {students}) {
  console.log (students)
  return (
    <div>
      <h2>Listing Student using boostrap Card</h2>
      <div className='studentsContainer"'>
    {
        students.map((student)=>(
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" className='studentsImg' src={`/images/${student.image}`} />
          <Card.Body>
            <Card.Title>{student.firstName}, {student.lastName}</Card.Title>
            <Card.Text>
              {student.comments}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        ))
      }
      </div>     
    </div>
  )
}
