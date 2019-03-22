import React, {Component} from 'react'
import questions from '../data/questions.json'
import ReactDOM from 'react-dom'
import SelectForm from './selectForm.js';

export default class Questions extends Component {
  constructor(){
    super()
    this.state = {
      questions: questions
    }
  }
  render () {
    const { questions } = this.state
    console.log('first', questions)  
      return (
      <div>
        <SelectForm question={questions[0]}/>
      </div>
    )
  }
}


