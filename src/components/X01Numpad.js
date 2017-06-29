import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/es/ButtonGroup';
import MyButton from '../components/MyButton';

const X01Numpad = ({click,submit, validInput, value}) => (
  <ButtonGroup>
    <div>
      <MyButton name="D" click={click} disabled={validInput(value)}/>
      <MyButton name="T" click={click} disabled={validInput(value)}/>
      <MyButton name="<" click={click} disabled={validInput(value)}/>
    </div>
    <div>
      <MyButton name="1" click={click} disabled={validInput(value)}/>
      <MyButton name="2" click={click} disabled={validInput(value)}/>
      <MyButton name="3" click={click} disabled={validInput(value)}/>
    </div>
    <div>
      <MyButton name="4" click={click} disabled={validInput(value)}/>
      <MyButton name="5" click={click} disabled={validInput(value)}/>
      <MyButton name="6" click={click} disabled={validInput(value)}/>
    </div>
    <div>
      <MyButton name="7" click={click} disabled={validInput(value)}/>
      <MyButton name="8" click={click} disabled={validInput(value)}/>
      <MyButton name="9" click={click} disabled={validInput(value)}/>
    </div>
    <div>
      <MyButton name="0" click={click} disabled={validInput(value)}/>
      <MyButton name="Submit" click={submit} disabled={(input) => true}/>
    </div>
  </ButtonGroup>
);

X01Numpad.propTypes = {
  value: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  validInput: PropTypes.func.isRequired
};

export default X01Numpad;