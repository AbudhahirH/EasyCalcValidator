import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate,{emptyString} from "../logic/calculate";
import "./App.css";
import Notes from './notes/notes';

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
    displayText: "display1",
    displayArr: {1:"1", 2:"2"}
  };


  props = {
    display: "Helloo"
  }

  handleClick = (buttonName) => {
    debugger;
    var self = this;
    this.setState(calculate(this.state, buttonName),
      ((args1, args2) => {
        console.log("calback", self);
      })
    );
    console.log("end");
  };

  onChange = (prop, value) => {
    let obj = {prop: value};
    obj[prop] = value;
    this.setState(obj);
  }

  componentDidMount(){
    console.log('componentDidMount');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  render() {
    return (
      <div className="component-app">
        <Notes></Notes>
        {/* <Display value={this.state.next || this.state.total || "0"} displayProp={this.state.displayText} displayArr={this.state.displayArr} onChange={this.onChange} />
        <ButtonPanel clickHandler={this.handleClick} /> */}
      </div>
    );
  }
}
