import React, { Component } from 'react'
import Validation from './components/validation'
import ChartComponent from './components/charComponent'

class App extends Component {
  constructor () {
    super()
    
    this.state = {
      text : '',
      charts : [],
      showChart : true
    }

  }
  
  onChange = (e) => {
    const textInput = e.target.value
    const text = this.state.text.slice()

    const arrayText = text.split()

    const list = [{...arrayText}]

    console.log(list)

    this.setState({
      text: textInput,
      charts : arrayText
    })
  }

  onDelete = (i) => {
    const letters = this.state.charts.slice()
    
    letters.findIndex( (letter) => {
      return letter.id === i
    })
  }

  render() {

    let letter = null
    
    if(this.state.showChart){
      letter = (
        <div>
          {this.state.charts.map( (chart, i) => {
            return (
              <ChartComponent
                key={i}
                letter={chart}
                delete={() => this.onDelete(i)}/>
            )
          })}
        </div>
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
