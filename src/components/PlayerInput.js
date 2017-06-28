import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



const PlayerInput = ({hint, handleChange, handleClick, handleDone, value, enableAdd, enableDone}) => (
  <div>
    <TextField id="addPlayer" hintText={hint} value={value} onChange={handleChange}/>
    <RaisedButton label="+" onTouchTap={handleClick} disabled={!enableAdd}/>
    <RaisedButton label="Done" onTouchTap={handleDone} disabled={!enableDone}/>
  </div>
);

PlayerInput.propTypes = {
  hint: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  enableAdd: PropTypes.bool.isRequired,
  enableDone: PropTypes.bool.isRequired,
};

export default PlayerInput;