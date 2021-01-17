import React from "react";
import classes from "./Person.module.css";
import styled from "styled-components";
const person = (props) => {
  const style = {
    "@media (min-width:500 px)": {
      width: "450px",
    },
  };

  return (
    <div className={classes.Person}>
      <div className="Person">
        <p onClick={props.click}>
          I am {props.name} and I have {props.age} years old
        </p>

        <br></br>
        <br></br>
        <input onChange={props.changed} value={props.name} />
      </div>
    </div>
  );
};

export default person;
