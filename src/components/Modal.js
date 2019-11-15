import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { Paper, Button } from '@material-ui/core';

const modalRoot = document.getElementById('modal-root');

export const ModalSet = props => {
  const [shown, setShown] = useState(true);
  return (
    <>
      <Button
        className="add-btn"
        onClick={() => setShown(true)}
        disableFocusRipple={true}
      >
        {props.trigger}
      </Button>
      {shown ? (
        <Modal {...props} title={props.title} onClose={() => setShown(false)}>
          {props.body}
        </Modal>
      ) : null}
    </>
  );
};

const Modal = props => {
  return ReactDOM.createPortal(
    <div className="modal-bg">
      <Paper
        elevation={10}
        style={{
          width: props.width ? props.width : '60%',
          height: props.height ? props.height : '75%',
          borderRadius: props.borderRadius ? props.borderRadius : '0px'
        }}
        className="modal-container"
      >
        <div className="modal-header">
          {props.title}
          <a onClick={props.onClose} className="modal-close">
            X
          </a>
          <hr />
        </div>
        <div className="modal-body">{props.children}</div>
        <div className="modal-footer">
          <Button variant="contained" onClick={props.onClose}>
            Close
          </Button>
        </div>
      </Paper>
    </div>,
    modalRoot
  );
};
