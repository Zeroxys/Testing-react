import React from 'react'

const styles = {
  container : {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: 'gainsboro',
    boxShadow : '2px 2px 5px #394a63',
  }
}

const ChartComponent = (props) => {
  return (
    <div style={styles.container} onClick={props.click}>
      <p>{props.chart}</p>
    </div>
  )
}

export default ChartComponent
