import React from "react";
import classes from "./Cockpit.module.css";
const cockpit = (props) => {
  const assigedClasses = [];
  let btnClass = [];
  if (props.showPersons) {
    btnClass.push(classes.Blue);
  }

  if (props.persons.length <= 2) {
    assigedClasses.push(classes.blue);
  }
  if (props.persons.length <= 1) {
    assigedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Hi I am React App</h1>
      <p className={assigedClasses.join(" ")}>This is really working</p>
      <button className={btnClass.join(" ")} onClick={props.clicked}>
        click on me please
      </button>
    </div>
  );
};

export default cockpit;
