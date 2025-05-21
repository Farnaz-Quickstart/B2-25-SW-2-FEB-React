import React, {useState} from 'react'

export default function FormSingleState() {
  const [formState, setFormState] = useState ({
    firstName: "",
    lastName: "",
    email:""
  })

  function handleChange (event) {
    const {name, value} = event.target;
    setFormState({})
  }

  function handleClick() {
    
  }

  return (
    <>
      <h3>Welcome to our class</h3>
      <label htmlFor="">FirstName: 
        <input type="text" name="firstName" onChange={handleChange}  />
      </label><br/>
      
      <label>
        LastName: 
        <input type="text" name="lastName"   />
      </label><br/>
      
      <label>
        Email: 
        <input type="text" name="email"     />
      </label><br/>
      
      <input type="button" onClick={handleClick} value="SUBMIT"></input>
    </>
  )
}
