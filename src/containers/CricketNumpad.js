import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {validInput} from '../utils/CricketDartsUtils';
import ButtonGroup from 'react-bootstrap/es/ButtonGroup';
import MyButton from '../components/MyButton';

class CricketNumpad extends Component {
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
          <MyButton name="15" click={this.click} disabled={validInput(this.state.value)}/>
          <MyButton name="16" click={this.click} disabled={validInput(this.state.value)}/>
          <MyButton name="17" click={this.click} disabled={validInput(this.state.value)}/>
        </div>
        <div>
          <MyButton name="18" click={this.click} disabled={validInput(this.state.value)}/>
          <MyButton name="19" click={this.click} disabled={validInput(this.state.value)}/>
          <MyButton name="20" click={this.click} disabled={validInput(this.state.value)}/>
        </div>
        <div>
          <MyButton name="B" click={this.click} disabled={validInput(this.state.value)}/>
          <MyButton name="Submit" click={this.submit} disabled={(input) => true}/>
        </div>
      </ButtonGroup>
    );
  }
}
CricketNumpad.propTypes = {
  submit: PropTypes.func.isRequired
};

export default CricketNumpad;