import React, { useState } from 'react';
import { Typography, Paper, Divider } from '@material-ui/core/';

const QuoteCard = props => {
  const [likes, setLikes] = useState(0);
  const [context, setContext] = useState(false);
  const [hov, setHov] = useState(false);
  const styles = {
    padding: '20px',
    margin: '5px',
    cursor: 'default'
  };

  const ctx =
    props.context === '' ? (
      ''
    ) : (
      <span
        onClick={() => {
          setContext(!context);
        }}
        style={{ float: 'right', cursor: 'pointer' }}
      >
        CONTEXT
      </span>
    );
  return (
    <Paper
      style={styles}
      square={true}
      elevation={hov ? 5 : 2}
      onMouseEnter={() => {
        setHov(true);
      }}
      onMouseLeave={() => {
        setHov(false);
      }}
    >
      <Typography variant="h5">{props.title}</Typography>
      <Divider />
      <Typography
        style={context ? { display: 'block' } : { display: 'none' }}
        variant="body2"
      >
        {props.context}
      </Typography>
      <Typography style={{ marginTop: '5px' }} variant="body1">
        "{props.quote}"
      </Typography>
      <Typography variant="caption">
        {props.date}
        {ctx}
      </Typography>
    </Paper>
  );
};

export default QuoteCard;
