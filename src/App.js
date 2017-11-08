import React, { Component } from 'react'
import Validation from './components/validation'
import ChartComponent from './components/charComponent'

class App extends Component {
  constructor () {
    super()
    
    this.state = {
      text : '',
      charts : null,
      showChart : true
    }

  }
  
  onInput = (e) => {
    const textInput = e.target.value

    const arrayText = textInput.split('')

    this.setState({
      text: textInput,
      charts : arrayText
    })
  }

  onDelete = (e, chartIndex) => {
    const Index = this.state.charts.findIndex( (i) => {
      return i[i] === chartIndex
    })

    console.log(Index)
  }

  render() {

    let letter = null
    
    if(this.state.showChart && this.state.charts){
      letter = (
        <div>
          {this.state.charts.map( (chart, chartIndex) => {
            return (
              <ChartComponent
                key={chartIndex}
                letter={chart}
                delete={(e) => this.onDelete(e, chartIndex)}/>
            )
          })}
        </div>
      )
    }

    return (
      <div>
        <Validation
          size={this.state.text.length}
          change={(e) => this.onInput(e)}
          text={this.state.text}/>  
          <div className="chartsContent"> {letter} </div>
      </div>
    )
  }
}

export default App
