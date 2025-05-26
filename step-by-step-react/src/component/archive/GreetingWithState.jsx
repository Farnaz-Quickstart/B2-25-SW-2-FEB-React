import React, {useState} from 'react'

export default function GreetingWithState() {
    // React state variable
  const [studentName, setStudentName] = useState("Farnaz")
  const [studentAge, setStudentAge] = useState(32)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [studentList, setSteudentList] = useState (["Alii", "Erica", "Joshua"])


  // Updating both variables
  // setStudentName("New Value") 
  // setStudentAge(33)
  // setIsLoggedIn (false)
  // setSteudentList([...studentList, "Marta"])


  return (
        <>
      <div>Greeting with State</div>
    </>
  )
}
