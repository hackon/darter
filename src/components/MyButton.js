import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const MyButton = ({name, click, disabled}) => (
  <RaisedButton label={name} onTouchTap={() => click(name)} disabled={!disabled(name)}/>
);

MyButton.propTypes = {
  name: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  disabled: PropTypes.func.isRequired
};

export default MyButton;