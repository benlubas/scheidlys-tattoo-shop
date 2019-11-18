import React, { useState } from 'react';

const FalseInput = props => {
  const [value, setValue] = useState(props.default);
  const styles = {
    margin: '5px',
    display: 'inline',
    borderBottom: '1px solid grey',
    paddingBottom: '3px',
    color: 'grey'
  };
  return <div style={styles}>{value}</div>;
};

export default FalseInput;
