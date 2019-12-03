<<<<<<< HEAD
import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    testProp: PropTypes.string,
  };

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
    console.log(nextProps);
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.props.displayArr['2'] = "5";
    this.props.onChange('displayText', 'display2');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    debugger
    return (
      <div className="component-display">
        <div>{this.props.value}{this.props.displayProp}{this.props.displayArr[2]}</div>
      </div>
    );
  }
}
=======
import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    testProp: PropTypes.string,
  };

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
    console.log(nextProps);
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.props.displayArr['2'] = "5";
    this.props.onChange('displayText', 'display2');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    debugger
    return (
      <div className="component-display">
        <div>{this.props.value}{this.props.displayProp}{this.props.displayArr[2]}</div>
      </div>
    );
  }
}
>>>>>>> b99d80534c0f058a53bf688f49098beb6d82d353
