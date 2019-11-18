import React, { useState, useEffect } from 'react';
import './TheNav.css';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useScrollTrigger
} from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import { titlecase } from '../pipes';

const TheNav = props => {
  const [page, setPage] = useState('home');
  const [dense, setDense] = useState(false);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" color="primary" aria-label="menu"></IconButton>
        <Typography variant="h6">{titlecase(props.title)}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TheNav;
