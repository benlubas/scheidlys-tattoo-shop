import React, { useState, useEffect } from 'react';
import { Input, TextField, Button } from '@material-ui/core';
import NumField from './NumField.js';
import './BadUi.css';

const MovingInputPhoneNumber = props => {
  const [value, setValue] = useState('(XXX)-XXX-XXXX');
  const [valid, setValid] = useState({ format: true, submit: false });
  const [index, setIndex] = useState(0);
  const validate = str => {
    if (str.charAt(0) != '(') return false;
    else if (str.charAt(4) != ')') return false;
    else if (str.charAt(5) != '-' || str.charAt(9) != '-') return false;
    return true;
    // return RegExp('/(3*[0-9]/)-3*[0-9]-4*[0-9]', 'g'); //look into using regex here.
  };
  const submitability = str => {
    if (str.indexOf('X') == -1) return true;
    return false;
  };
  useEffect(() => {
    setValid({ format: validate(value), submit: submitability(value) });
  }, [value]);
  const handleClick = val => {
    setValue(value.substr(0, index) + val + value.substr(index + 1));
    setIndex((index + 1) % 14);
  };
  return (
    <div style={{ margin: '10px' }}>
      <div>
        <label>Phone Number: </label>
        <Input value={value} type="text" disabled={true} />
        <div
          className="help-text"
          style={
            valid.format ? { visibility: 'hidden' } : { visibility: 'visible' }
          }
        >
          INVALID!
        </div>
      </div>
      <NumField clicked={handleClick} />
      {valid.submit && valid.format ? <div>Submit</div> : null}
    </div>
  );
};

export default MovingInputPhoneNumber;
