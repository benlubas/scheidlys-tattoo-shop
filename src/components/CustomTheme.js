import React, { useState } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { green, orange } from '@material-ui/core/colors';

const CustomTheme = props => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: orange[500],
        contrastText: 'white'
      },
      secondary: {
        main: green[500],
        contrastText: 'white'
      }
    }
  });

  return (
    <MuiThemeProvider theme={theme}>
      <div>{props.children}</div>
    </MuiThemeProvider>
  );
};

export default CustomTheme;
