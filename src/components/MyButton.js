import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';

const style = {
  bgSize: 'large'
};

const MyButton = ({name, click, disabled}) => (
  <Button style={style} key={name} onClick={click} disabled={disabled} >{name}</Button>
);

MyButton.propTypes = {
  name: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default MyButton;