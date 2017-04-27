import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardComponent from '../components/Card';

export default class Home extends Component {
  render() {
    return(
      <div>
          <h1>Home</h1>
          <MuiThemeProvider>
            <CardComponent />
          </MuiThemeProvider>
      </div>
    )
  }
}
