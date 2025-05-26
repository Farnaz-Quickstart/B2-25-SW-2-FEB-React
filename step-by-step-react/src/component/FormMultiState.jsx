import React, {useState} from 'react'

 function FormMultiState() {

    // Defining firstName state with default value of Joshua
    const [firstNameState, setFirstNameState] = useState ("Tom")
    const [lastNameState, setLastNameState] = useState("Towhidi")

    console.log (firstNameState)
    console.log (lastNameState)

  function handleChange (event) {
    console.log (event)
  }

  return (
    <>
      <h1>User Registration Form</h1>
      <label>FirstName:
        <input type="text" name="firstName" onChange={(e)=>setFirstNameState(e.target.value)} ></input>
      </label>
      <button >SUBMIT</button>

      <label>LastName:
        <input type="text" name="lastName" onChange={handleChange} ></input>
      </label>
      <button >SUBMIT</button>
    </>
  )
}

export default FormMultiState;
