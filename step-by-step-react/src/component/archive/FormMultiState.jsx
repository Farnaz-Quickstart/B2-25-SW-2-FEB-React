import React, {useState} from 'react'

function FormMultiState() {
  const [firstNameState, setFirstNameState] = useState("")
  const [lastNameState, setLastNameState] = useState("")

  function handleClick (event) {
    console.log (firstNameState, lastNameState)
  }

  return (
    <>
      <h3>Welcome to our class</h3>
      <label htmlFor="">FirstName: 
        <input type="text" name="firstName" onChange={(event)=>setFirstNameState(event.target.value)} />
      </label><br/>
      
      <label>
        LastName: 
        <input type="text" name="lastName" onChange={(event)=>setLastNameState(event.target.value)}  />
      </label><br/>

      
      <input type="button" value="SUBMIT" onClick={handleClick}></input>
    </>
  )
}


export default FormMultiState;
