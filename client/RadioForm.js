import React from 'react'
import createForm from './createForm'

const RadioForm = ({ question, handleChange, handleSubmit }) => {
  if (!question) return <div />
  return (
    <form onSubmit={handleSubmit}>
      <label>{question.name}</label>
      {question.choices.map((elem, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              name="answer"
              value={elem.value}
              id={elem.value}
              onChange={handleChange}
            />
            <label htmlFor={elem.value}> {elem.label}</label>
          </div>
        )
      })}
      <button type="submit">Next</button>
    </form>
  )
}

const RadioFormStatefulComponent = createForm(RadioForm)

export default RadioFormStatefulComponent
