import React, { Component } from "react";
import classes from "./App.module.css";
import Person from "../components/Persons/Person/Person";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Mahgol", age: "27" },
      { id: "2", name: "Milad", age: "30" },
      { id: "3", name: "Shirin", age: "29" },
    ],

    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  evennameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;
    let btnClass = [];
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.evennameHandler}
        />
      );

      btnClass = classes.Blue;
    }

    let assigedClasses = [];
    if (this.state.persons.length <= 2) {
      assigedClasses.push(classes.blue);
    }
    if (this.state.persons.length <= 1) {
      assigedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <Cockpit
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          showPersons={this.state.showPersons}
        />
        {persons}
      </div>
    );
  }
}

export default App;
