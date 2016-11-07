import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardComponent from '../components/Card';

export default class Home extends TrackerReact(React.Component) {
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
