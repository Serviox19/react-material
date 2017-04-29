import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import NavIconMenu from './NavMenu';


const AppBarComponent = () => (
  <AppBar
    title={<span className="title">Welcome</span>}
    iconElementLeft={<NavIconMenu />}
    iconElementRight={
      <div>
        <FlatButton
          label={<span className="link">Home</span>}
          href="/" />
        <FlatButton
          label={<span className="link">Login</span>}
          href="/login" />
        <FlatButton
          label={<span className="link">Sign-Up</span>}
          href="/signup" />
      </div>}
  />
);

export default AppBarComponent;
