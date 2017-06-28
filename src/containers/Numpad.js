import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {validInput} from '../utils/Darts';
import X01Numpad from "../components/X01Numpad";

class Numpad extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: ''
    };
    this.click = this.click.bind(this);
    this.submit = this.submit.bind(this);
  }

  click(newValue) {
    this.setState({value: this.state.value + newValue})
  }

  submit() {
    this.props.submit(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <X01Numpad click={this.click} submit={this.submit} validInput={validInput} value={this.state.value}/>
    );
  }
}
Numpad.propTypes = {
  submit: PropTypes.func.isRequired
};

export default Numpad;