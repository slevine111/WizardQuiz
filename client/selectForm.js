import React from 'react'
import Questions from './Questions';


class SelectForm extends React.Component{
    constructor(){
        super()
        this.state = {
            selected: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(ev){
        ev.preventDefault()
        console.log(this.state)
    }

    handleChange(ev){
        console.log(ev.target.value)
        this.setState({selected: ev.target.value}, ()=>{console.log(1, this.state)})
        
    }
    componentDidMount(){
        this.setState({selected:"Gryffindor"})
    }

    render(){
    const {question} = this.props
    return (
    
      <form onSubmit={this.handleSubmit}>
        <label>{question.name}</label>   
        <select name='answer'  onChange={this.handleChange}>
            
            {question.choices.map((elem, i)=>{
                return <option key= {i} value={elem.value}> {elem.label} </option>})
                }
           
        </select>     
        <button type='submit'>Next</button>
      </form>
  
  
    )
    }
}

export default SelectForm