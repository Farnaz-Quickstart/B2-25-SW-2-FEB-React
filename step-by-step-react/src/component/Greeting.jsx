import React from 'react'

export default function Greeting(props) {
  console.log (props)
  return (
    <>
      <h1>Welcome to our class {props.firstName} {props.lastName}</h1>
      <p>This is software class</p>
    </>
  )
}
