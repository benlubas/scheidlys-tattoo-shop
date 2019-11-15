import React, { useState } from 'react';
import { Paper, Typography, Icon } from '@material-ui/core';

const QuoteAddBtn = props => {
  const [hov, setHov] = useState(false);
  return (
    <Paper
      gridPos="add-btn"
      elevation={hov ? 5 : 3}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      square={true}
    >
      <Icon fontSize="large" style={{ padding: '10px 10px 10px 0px' }}>
        add_circle
      </Icon>
      <Typography variant="button">Add</Typography>
    </Paper>
  );
};

export default QuoteAddBtn;
