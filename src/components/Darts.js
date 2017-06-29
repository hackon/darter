import React from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const Darts = ({darts}) => (
  <div style={styles.wrapper}>
    {darts.map((dart, index) => (
      <Chip key={index} style={styles.chip}>{dart}</Chip>
    ))}
  </div>
);

Darts.propTypes = {
  darts: PropTypes.array.isRequired
};

export default Darts;