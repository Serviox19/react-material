import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '../components/AppBar.jsx';

export default class Home extends TrackerReact(React.Component) {
  render() {
    return(
      <div>
          <MuiThemeProvider>
            <AppBar />
          </MuiThemeProvider>
      </div>
    )
  }
}
