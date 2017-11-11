import React from 'react'

const Validation = (props) => {

  let textValidation = 'text enough long'
  if(props.text.length <= 5) {
    textValidation = 'text too short'
  }

  return (
    <div>
      <h1>Validacion</h1>
      <input type="text" onChange={props.changed}/>
      <h3>{props.text}</h3>
      <p>{textValidation}</p>
    </div>
  )
}

export default Validation
