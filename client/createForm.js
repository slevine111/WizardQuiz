import React, { Component } from 'react'

const createForm = FormComponent => {
  return class StatefulForm extends Component {
    constructor() {
      super()
      this.state = {
        selected: ''
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(ev) {
      ev.preventDefault()
      this.props.answerQuestionAndAdvance(this.state.selected)
    }

    handleChange(ev) {
      this.setState({ selected: ev.target.value })
    }

    render() {
      return (
        <FormComponent
          {...this.props}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      )
    }
  }
}

export default createForm
