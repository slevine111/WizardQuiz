import React, { Component } from 'react'

const testHoc = FormComponent => {
  return class StatefulForm extends Component {
    whatToRender() {
      if (this.props.condition) {
        return <div>loading</div>
      } else {
        return <FormComponent />
      }
    }

    render() {
      return <FormComponent whatToRender={this.whatToRender} />
    }
  }
}

export default testHoc
