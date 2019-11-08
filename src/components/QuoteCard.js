import React, { Component } from 'react';
import { Typography, Paper } from '@material-ui/core/';

String.prototype.titleCase = function(){
  return this.split(" ").map(value => value.charAt(0).toUpperCase() + value.substr(1)).join(" "); 
}

class QuoteCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hovered: false, 
      likes: 0, 
      showContext: false, 
    } 
    this.styles = {
      padding: '20px', 
      
    }
  }
  
  render() {
    return (
      <Paper style={this.styles} square={true} elevation={3}>
        <Typography variant="h5">
          {this.props.title.titleCase()}
        </Typography>
        <Typography variant="subtitle1">{this.props.context}</Typography>
        <Typography variant="body1">"{this.props.quote}"</Typography>
        <Typography variant="caption">{this.props.date}</Typography>
      </Paper>
    );
  }
}

export default QuoteCard;