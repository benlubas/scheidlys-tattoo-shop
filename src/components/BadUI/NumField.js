import React, { useState } from 'react';

const NumField = props => {
  const [styles, setStyles] = useState({
    backgroundColor: '#DDDDDD',
    width: '400px',
    height: '200px',
    border: '2px solid black'
  });
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '-', '(', ')'];

  const floats = nums.map((value, index) => (
    <FloatingNumber
      xStart={index * 20}
      clicked={props.clicked}
      value={value + ''}
    />
  ));

  return <div style={styles}>{floats}</div>;
};
const ran = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1));
};

const FloatingNumber = props => {
  const [speed, setSpeed] = useState(2);
  const [pos, setPos] = useState({ x: props.xStart, y: 20 });
  const [styles, setStyles] = useState({
    position: 'absolute',
    marginTop: pos.y,
    marginLeft: pos.x,
    border: '1px dotted black',
    display: 'inline',
    fontSize: '2em',
    cursor: 'pointer'
  });

  return (
    <div onClick={() => props.clicked(props.value)} style={styles}>
      {props.value}
    </div>
  );
};

export default NumField;
