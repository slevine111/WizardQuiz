import React from 'react'
import createForm from './createForm'

const SelectForm = ({ question, handleChange, handleSubmit }) => {
  if (!question) return <div />
  return (
    <form onSubmit={handleSubmit}>
      <label>{question.name}</label>
      <select name="answer" onChange={handleChange}>
        <option value="">--</option>
        {question.choices.map((elem, i) => {
          return (
            <option key={i} value={elem.value}>
              {' '}
              {elem.label}{' '}
            </option>
          )
        })}
      </select>
      <button type="submit">Next</button>
    </form>
  )
}

const SelectFormStatefulComponent = createForm(SelectForm)

export default SelectFormStatefulComponent
