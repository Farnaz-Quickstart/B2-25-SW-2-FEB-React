import React, {useState} from 'react'

function FormMultiState() {
  const [firstNameState, setFirstNameState] = useState("")
  const [lastNameState, setLastNameState] = useState("")
  const [emailState, setEmail] = useState("")

  function handleChange(event) {
    setFirstNameState(event.target.value)
  }

  function handleClick() {
    console.log (firstNameState, lastNameState, emailState)

  }

  return (
    <>
      <h3>Welcome to our class</h3>
      <label htmlFor="">FirstName: 
        <input type="text" name="firstName" onChange={(e)=>setFirstNameState(e.target.value)}  />
      </label><br/>
      
      <label>
        LastName: 
        <input type="text" name="lastName" onChange={(e)=>setLastNameState(e.target.value)}  />
      </label><br/>
      
      <label>
        Email: 
        <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)}    />
      </label><br/>
      
      <input type="button" onClick={handleClick} value="SUBMIT"></input>
    </>
  )
}


export default FormMultiState;
