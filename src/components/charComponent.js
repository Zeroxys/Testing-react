import React from 'react'

const styles = {
  display: 'inline-block',
  padding: 10,
  width:80,
  marginTop: 10,
  boxShadow: '2px 2px 5px #394a63',
  textAlign: 'center'
}

const CharComponent = (props) => {
  return (
    <div style={styles}>
      <h2>{props.letter}</h2>
    </div>
  )
}

export default CharComponent
