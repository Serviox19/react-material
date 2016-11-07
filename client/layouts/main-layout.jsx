import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarComponent from '../components/AppBar';

export const MainLayout = ({content}) => (
  <div className='main-layout'>
    <MuiThemeProvider>
      <AppBarComponent />
    </MuiThemeProvider>
    {content}
  </div>
)
