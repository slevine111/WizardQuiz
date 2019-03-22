import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SelectForm from './selectForm.js'
import RadioForm from './RadioForm'
import axios from 'axios'
import Result from './Result'
import sortHouse from './sortHouse'
import HOC from './HOC'

class Questions extends Component {
  constructor() {
    super()
    this.state = {
      questions: [],
      answer: [],
      currentQuestionNumber: 1
    }
    this.answerQuestionAndAdvance = this.answerQuestionAndAdvance.bind(this)
  }

  componentDidMount() {
    return axios
      .get('/api/questions')
      .then(({ data }) => this.setState({ questions: data }))
      .catch(err => console.log(err))
  }

  answerQuestionAndAdvance(currentAnswer) {
    return this.setState(curState => {
      curState.answer.push(currentAnswer)
      ++curState.currentQuestionNumber
      return curState
    })
  }

  render() {
    console.log('in rendering')
    const { questions, currentQuestionNumber, answer } = this.state
    const currentQuestion = questions.find(
      question => question.id === currentQuestionNumber
    )
    const numberOfQuestions = Math.max(
      ...questions.map(question => question.id)
    )
    return (
      <div>
        {currentQuestionNumber > numberOfQuestions &&
        currentQuestionNumber > 1 ? (
          <Result house={sortHouse(answer)} />
        ) : currentQuestionNumber % 2 === 0 ? (
          <RadioForm
            question={currentQuestion}
            answerQuestionAndAdvance={this.answerQuestionAndAdvance}
          />
        ) : (
          <SelectForm
            question={currentQuestion}
            answerQuestionAndAdvance={this.answerQuestionAndAdvance}
          />
        )}
      </div>
    )
  }
}

const Test = HOC(Questions)

export default Test
