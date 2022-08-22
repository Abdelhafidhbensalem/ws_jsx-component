import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button style={{ backgroundColor:props.variant}}> click me</button>
    </div>
  )
}

export default Button