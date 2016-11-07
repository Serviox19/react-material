import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


const AppBarComponent = () => (
  <AppBar
    title={<span className="title">Hello</span>}
    iconElementRight={<FlatButton label="Login" />}
    onRightIconButtonTouchTap={
      function() {
        alert("Hello World");
      }
    }
  />
);

export default AppBarComponent;
