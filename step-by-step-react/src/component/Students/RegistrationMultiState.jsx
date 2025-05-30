import React, {useState} from 'react'

 function RegistrationMultiState() {

    // Defining firstName state with default value of Joshua
  const [firstNameState, setFirstNameState] = useState ("Tom")
  const [lastNameState, setLastNameState] = useState("Towhidi")
  const [telState, setTelState] = useState()
  const [studentAge, setStudentAge] = useState(49)
  const [students, setStudents] = useState (["brayan", "Chandler", "Erica"])


  function onStateChange () {
    setStudentAge (50)
    setStudents ([...students, "micheal", "Usman"])
  }

  function handleFirstName(event) {
    console.log (event)
    console.log (event.target.name)
    console.log (event.target.value)
    setFirstNameState(event.target.value)
  }

  function handleLastName(event) {
      setLastNameState (event.target.value)
  }

  function handleSubmit () {
    console.log (firstNameState, lastNameState, telState)
  }


  return (
    <>
      <h1>User Registration Form</h1>
      <label>FirstNameeeeee:
        <input type="text" name="firstName" onChange={handleFirstName}  ></input>
      </label>

      <label>LastName:
        <input type="text" name="lastName" onChange={handleLastName}  ></input>
      </label>

      <label>Tel:
        <input type="text" name="tel" onChange={(event)=>setTelState(event.target.value)} ></input>
      </label>

      <button onClick={handleSubmit} >SUBMIT</button>
    </>
  )
}

export default RegistrationMultiState;
