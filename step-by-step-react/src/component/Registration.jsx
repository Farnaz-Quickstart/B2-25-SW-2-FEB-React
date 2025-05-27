import React from 'react'

export default function Registration({productList}) {
  console.log ("Registration component")
  console.log (productList)

  return (
    <>
      <h1>Register Your Favorite Products Below</h1>
      <ul>
        <li>{productList[0]}</li>
        <li>{productList[1]}</li>
      </ul>
    </>
  )
}
