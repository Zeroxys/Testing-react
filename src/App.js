import React, {Component} from 'react'
import './index.css'
import Validation from './components/validation'
import ChartComponent from './components/charComponent'
export default class App extends Component {
  constructor (props) {
    super()
    this.state = {
      text : ''
    }
  }
  
  onChanged = (e) => {
    let text = e.target.value
    this.setState({text})
  }

  onDelete = (i) => {
    const textDate = this.state.text.slice()
    let newData  = textDate.split('')
    newData.splice(i, 1)
    let textUpdate  = newData.join('')
  
    this.setState({ text : textUpdate})
  }

  render () {

    let chartList = null

    chartList = this.state.text.split('').map( (el, i) => {
      return (<ChartComponent 
        key={i} chart={el} click = {() => this.onDelete(i)}/>
        )
    })

    return (
      <div>
        <div className="mainBox">
          <h1>Testing</h1>
          <Validation
            changed={(e) => this.onChanged(e)}
            text = {this.state.text}/>
        </div>
        <div className="chartsContent">
          {chartList}
        </div>
      </div>
    )
  }
}
