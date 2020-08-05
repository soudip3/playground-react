import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons : [
      { id:'nsfhs1', name: 'Saheli Das', age:23},
      { id:'vndvj2', name: 'Soudip Halder', age:23},
      { id:'nvdnv3', name: 'Anil Shaw', age:24}
    ]
  }

  onChangeHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({persons:persons})
  }

  deletePersonHandler = (id) =>{
    const persons = [...this.state.persons]
    persons.splice(id,1)
    this.setState({ persons : persons })
  }

  togglePersonHandler = () => {
    const show = this.state.togglePerson
    this.setState({ togglePerson : !show})
  }
  
  render() {

    let persons = null
    if(this.state.togglePerson){
      persons = (
      <div>
      {this.state.persons.map( (person,index) => {
        return <Person 
        name = {person.name}
        age={person.age} 
        key={person.id}
        deletePerson = {() => this.deletePersonHandler(index)}
        changed = {(event) => this.onChangeHandler(event, person.id)}
        ></Person>
      })}
      </div>)
    }

    let classes = []
    if(this.state.persons.length >=2 ){
      classes.push('red')
    }
    if(this.state.persons.length >=1 ){
      classes.push('bold')
    }
    
    return (
        <div className="App">
          <h1>Hello! Welcome to React World</h1>
          <p className={classes.join(' ')}>This is working now</p>
          <button className="button" onClick={this.togglePersonHandler}>Show Me</button>
          {persons}
        </div>
    );
  }
}

export default App;