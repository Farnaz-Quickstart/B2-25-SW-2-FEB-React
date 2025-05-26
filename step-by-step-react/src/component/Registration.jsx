import React from 'react'

export default function Registration({productList}) {
  console.log (productList)
  return (
    <>
      <h2>Register Your Favorite Products Below </h2>
      <ul>
        <li>{productList[0]}</li>
        <li>{productList[1]}</li>
      </ul>
    </>
  )
}
