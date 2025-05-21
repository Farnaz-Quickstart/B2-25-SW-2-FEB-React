import React, {useState} from 'react'

export default function FormSingleState() {
  const [formState, setFormState] = useState ({
    firstName: "",
    lastName: "",
    email:""
  })

  function handleChange (event) {

    const {name, value} = event.target;
    console.log (name, value)
    setFormState((prevData)=>({
      ...prevData, [name]:value}))
  }

  function handleClick() {
    console.log (formState)
  }

  return (
    <>
      <h3>Welcome to our class</h3>
      <label htmlFor="">FirstName: 
        <input type="text" name="firstName" onChange={handleChange}  />
      </label><br/>
      
      <label>
        LastName: 
        <input type="text" name="lastName" onChange={handleChange}   />
      </label><br/>
      
      <label>
        Email: 
        <input type="text" name="email" onChange={handleChange}   />
      </label><br/>
      
      <input type="button" onClick={handleClick} value="SUBMIT"></input>
    </>
  )
}
