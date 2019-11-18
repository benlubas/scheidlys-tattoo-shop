import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const ran = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1));
};

const validate = ({ areaCode, midThree, lastFour }) => {
  if (
    areaCode.indexOf('X') == -1 &&
    midThree.indexOf('X') == -1 &&
    lastFour.indexOf('X') == -1
  ) {
    return true;
  }
  return false;
};
const InputNum = props => {
  const [value, setValue] = useState({
    display: props.value,
    actual: props.value
  });

  const [styles, setStyles] = useState({
    display: 'inline',
    fontSize: '4em',
    margin: '10px',
    cursor: 'pointer',
    fontFamily: 'monospace',
    width: '20px'
  });
  return (
    <div
      style={styles}
      onClick={() => props.clicked(value.display)}
      onMouseLeave={() => {
        setValue({
          ...value,
          display: value.actual
        });
        setStyles({
          ...styles,
          color: 'black'
        });
      }}
      onMouseEnter={() => {
        setValue({
          ...value,
          display: ran(0, 9)
        });
        setStyles({
          ...styles,
          color: 'blue'
        });
      }}
    >
      {value.display}
    </div>
  );
};
const ShiftingNumsPhoneNumber = () => {
  const [index, setIndex] = useState(0);
  const [valid, setValid] = useState(false);
  const [falseInput, setFalseInput] = useState({
    areaCode: ['X', 'X', 'X'],
    midThree: ['X', 'X', 'X'],
    lastFour: ['X', 'X', 'X', 'X']
  });
  const styles = {
    margin: '5px',
    display: 'inline',
    borderBottom: '1px solid grey',
    paddingBottom: '3px',
    color: 'grey'
  };
  const clicked = keyVal => {
    let { areaCode, midThree, lastFour } = falseInput;
    index > 5
      ? (lastFour[index - 6] = keyVal)
      : index > 2
      ? (midThree[index - 3] = keyVal)
      : (areaCode[index] = keyVal);
    setFalseInput({ areaCode, midThree, lastFour });
    setIndex((index + 1) % 10);
    setValid(validate(falseInput));
  };
  const row1 = [1, 2, 3];
  const row2 = [4, 5, 6];
  const row3 = [7, 8, 9];
  const bottom = [null, 0, null];
  const f1 = row1.map((val, index) => (
    <InputNum clicked={clicked} value={val} key={index + 'f1'} />
  ));
  const f2 = row2.map((val, index) => (
    <InputNum clicked={clicked} value={val} key={index + 'f2'} />
  ));
  const f3 = row3.map((val, index) => (
    <InputNum clicked={clicked} value={val} key={index + 'f3'} />
  ));
  const fb = bottom.map((val, index) => (
    <InputNum clicked={clicked} value={val} key={index + 'fb'} />
  ));
  const areaCodeJSX = falseInput.areaCode.map((v, i) =>
    index == i ? <span style={{ color: 'blue' }}>{v}</span> : v
  );
  const midThreeJSX = falseInput.midThree.map((v, i) =>
    index - 3 == i ? <span style={{ color: 'blue' }}>{v}</span> : v
  );
  const lastFourJSX = falseInput.lastFour.map((v, i) =>
    index - 6 == i ? <span style={{ color: 'blue' }}>{v}</span> : v
  );

  return (
    <>
      <div style={styles}>
        ({areaCodeJSX})-{midThreeJSX}-{lastFourJSX}
      </div>
      <div className="r1">{f1}</div>
      <div className="r2">{f2}</div>
      <div className="r3">{f3}</div>
      <div className="r4" style={{ paddingLeft: '30px' }}>
        {fb}
      </div>
      {valid ? (
        <h3
          style={{
            color: 'green',
            margin: '10px',
            padding: '5px',
            backgroundColor: '#DDDDDD',
            border: '2px solid grey',
            borderRadius: '5px',
            display: 'inline',
            cursor: 'pointer'
          }}
        >
          SUMBIT!
        </h3>
      ) : null}
    </>
  );
};

export default ShiftingNumsPhoneNumber;
