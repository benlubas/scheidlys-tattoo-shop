import React, { useState, forwardRef } from 'react';
import './cell.css';

const Cell = props => {
  const [state, setState] = useState({
    flagged: props.flagged,
    shown: props.shown
  });
  const [bg, setBg] = useState({
    backgroundColor: '#EEEEEE'
  });

  // const reveal = () => {
  //   if (!state.flagged) {
  //     setState({ ...state, shown: true });
  //     setBg({ backgroundColor: '#EEEEEE' });
  //   }
  //   if (props.num == 0) props.updateSurrounding();
  // };
  return (
    <div
      onMouseEnter={() =>
        state.flagged
          ? setBg({ backgroundColor: 'pink' })
          : setBg({ backgroundColor: '#CECECE' })
      }
      onMouseLeave={() =>
        state.flagged
          ? setBg({ backgroundColor: 'pink' })
          : setBg({ backgroundColor: '#EEEEEE' })
      }
      onContextMenu={e => {
        e.preventDefault();
        if (!state.shown) {
          setState({ ...state, flagged: !state.flagged });
          !state.flagged
            ? setBg({ backgroundColor: 'pink' })
            : setBg({ backgroundColor: '#CECECE' });
        }
      }}
      onClick={() => {
        props.clicked(props.r, props.c, props.grid);
      }}
      style={bg}
      className="cell"
    >
      <span
        style={
          props.shown ? { visibility: 'visible' } : { visibility: 'hidden' }
        }
      >
        {props.value}
      </span>
    </div>
  );
};

export default Cell;
