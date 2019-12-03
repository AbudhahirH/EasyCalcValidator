import React from "react";
import "./notes.css";

export default class Notes extends React.Component {
  constructor() {
    super();
  }

  obj = {
    values: ""
  }
  state = {
    result: 0
  }
  componentDidMount() {
    console.log('componentDidMount');
  }

  validate = () => {
    let output = this.calculate(this.obj.values);
    this.setState({result: output});
    console.log(output);
  }
  addValues = (args1, args2) => {
    let str = args1.currentTarget.value;
    this.obj.values = str;
  }

  calculate(input) {

    var f = {
      add: '+'
      , sub: '-'
      , div: '/'
      , mlt: '*'
      , mod: '%'
      , exp: '^'
    };

    // Create array for Order of Operation and precedence
    f.ooo = [[[f.mlt], [f.div], [f.mod], [f.exp]],
    [[f.add], [f.sub]]];

    input = input.replace(/[^0-9%^*\/()\-+.]/g, '');// clean up unnecessary characters

    // Removing '()' brackets.
    // Issue: It adds content inside '()'
    //input = input.replace(/[()]/g,'');

    // It removes '()' as well as content inside '()'
    input = input.replace(/\(.*?\)/g, '');

    var output;
    for (var i = 0, n = f.ooo.length; i < n; i++) {

      // Regular Expression to look for operators between floating numbers or integers
      var re = new RegExp('(\\d+\\.?\\d*)([\\' + f.ooo[i].join('\\') + '])(\\d+\\.?\\d*)');
      re.lastIndex = 0;                                     // be cautious and reset re start pos

      // Loop while there is still calculation for level of precedence
      while (re.test(input)) {
        //document.write('<div>' + input + '</div>');
        output = calc_internal(RegExp.$1, RegExp.$2, RegExp.$3);
        if (isNaN(output) || !isFinite(output)) return output;   // exit early if not a number
        input = input.replace(re, output);
      }
    }

    return output;

    function calc_internal(a, op, b) {
      a = a * 1; b = b * 1;
      switch (op) {
        case f.add: return a + b; break;
        case f.sub: return a - b; break;
        case f.div: return a / b; break;
        case f.mlt: return a * b; break;
        case f.mod: return a % b; break;
        case f.exp: return Math.pow(a, b); break;
      }
    }
  }


  render() {
    return (
      <div>
        <center id="cont-title">Validate Simple Caculations</center>

      <div id="calc-container">
        <span id="calc-title">Edit/Paste your calculations</span>
        <table id="calc-table">
          <tr>
            <td>
              <input onChange={this.addValues} size="30"/><button onClick={this.validate}>Calculate</button>
            </td>
            
          </tr>
        </table>

        <div>{this.state.result}</div>
      </div>
      </div>
    )
  }

}