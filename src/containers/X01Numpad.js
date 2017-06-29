import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {validInput} from '../utils/Darts';
import ButtonGroup from 'react-bootstrap/es/ButtonGroup';
import MyButton from '../components/MyButton';

class X01Numpad extends Component {
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
      <ButtonGroup>
        <div>
          <MyButton name="D" click={this.click} disabled={validInput(this.state.value)}/>
          <MyButton name="T" click={this.click} disabled={validInput(this.state.value)}/>
          <MyButton name="<" click={this.click} disabled={validInput(this.state.value)}/>
        </div>
        <div>
          <MyButton name="1" click={this.click} disabled={validInput(this.state.value)}/>
          <MyButton name="2" click={this.click} disabled={validInput(this.state.value)}/>
          <MyButton name="3" click={this.click} disabled={validInput(this.state.value)}/>
        </div>
        <div>
          <MyButton name="4" click={this.click} disabled={validInput(this.state.value)}/>
          <MyButton name="5" click={this.click} disabled={validInput(this.state.value)}/>
          <MyButton name="6" click={this.click} disabled={validInput(this.state.value)}/>
        </div>
        <div>
          <MyButton name="7" click={this.click} disabled={validInput(this.state.value)}/>
          <MyButton name="8" click={this.click} disabled={validInput(this.state.value)}/>
          <MyButton name="9" click={this.click} disabled={validInput(this.state.value)}/>
        </div>
        <div>
          <MyButton name="0" click={this.click} disabled={validInput(this.state.value)}/>
          <MyButton name="Submit" click={this.submit} disabled={(input) => true}/>
        </div>
      </ButtonGroup>
    );
  }
}
X01Numpad.propTypes = {
  submit: PropTypes.func.isRequired
};

export default X01Numpad;