import React from 'react'

function GreetingWithStyle({myColor}) {
  return (
    <div>
      <div style={{fontFamily:'fantasy', color:'red'}}>Good Morning Class</div>
      <div style={{color:myColor}}>This is Software Engineering</div>
    </div>
  )
}

export default GreetingWithStyle;
