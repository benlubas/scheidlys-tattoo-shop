import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';

export default class CustomTheme extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider theme={this.theme}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}
