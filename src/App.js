import React, { Component } from 'react'
import Validation from './components/validation'
import ChartComponent from './components/charComponent'

class App extends Component {
  constructor () {
    super()
    
    this.state = {
      text : '',
      showChart : false
    }

  }
  
  onChange = (e, stringDiv) => {
    const textInput = e.target.value

    this.setState({
      text: textInput
    })
  }

  render() {

    let letter = null
    
    if(this.state.showChart){
      letter = (
        <ChartComponent
          letter = 'a'/>
      )
    }

    return (
      <div>
        <Validation
          size={this.state.text.length}
          change={(e) => this.onChange(e)}
          text={this.state.text}/>  

          {letter}
      </div>
    )
  }
}

export default App
