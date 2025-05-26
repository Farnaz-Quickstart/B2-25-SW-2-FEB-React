import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';

export default function FormSingleState() {
  const [formState, setFormState] = useState({
    firstName : "",
    lastName : "" ,
    email: "" 
  })

  function handleChange (event) {
    const {name, value} = event.target
    console.log (name, value)
    setFormState ({...formState, [name]:value})
  }

  function handleClick() {
    console.log (formState)
  }

  return (
    <>
      <h3>Welcome to our class</h3>
      <Button variant="success">ALL Students</Button>

      <label htmlFor="">FirstName: 
        <input type="text" name="firstName" onChange={handleChange} />
      </label><br/>
      
      <label>
        LastName: 
        <input type="text" name="lastName" onChange={handleChange} />
      </label><br/>
      
      <label>
        Email: 
        <input type="text" name="email" onChange={handleChange}  />
      </label><br/>
      
      <input type="button" value="SUBMIT" onClick={handleClick}></input>
    </>
  )
}
