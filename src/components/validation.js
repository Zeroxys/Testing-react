import React from 'react'

const Validation = (props) => {
  return (
    <div className="mainBox">
      <h1>Validation Test</h1>
      <span><input type="text" onChange={props.change} value={props.text}/><p>Text Size : {props.size} {props.size > 5 ? 'Text enought': 'Text too short'}</p></span>
    </div>
  )
}

export default Validation
