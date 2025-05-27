import React, {useState} from 'react'

export default function FormSingleState() {

  const [formData, setFormData] = useState({
    firstNameStudent:"",
    lastNameStudent: "" ,
    telStudent: "506-999-9999"
  })

  function handleChange (event) {
    console.log (event.target)
    console.log (event.target.name)
    console.log (event.target.value)
    const {name, value } = event.target
    setFormData ({...formData, [name]:value})

  }

  function handleSubmit () {
    console.log (formData)
  }

  return (
    <>
      <h1>User Registration Form</h1>
      <label>FirstNameeeeee:
        <input type="text" name="firstNameStudent" onChange={handleChange} ></input>
      </label>

      <label>LastName:
        <input type="text" name="lastNameStudent" onChange={handleChange} ></input>
      </label>

      <label>Tel:
        <input type="text" name="telStudent" onChange={handleChange} ></input>
      </label>

      <button onClick={handleSubmit} >SUBMIT</button>
    </>
  )
}
