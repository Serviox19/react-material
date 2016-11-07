import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'react-mounter';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import {MainLayout} from '../layouts/main-layout.jsx';
import Home from '../views/Home.jsx';
import Login from '../views/Login.jsx';
import Signup from '../views/Signup.jsx';


FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (
        <Home />
      )
    });
  }
});

FlowRouter.route('/login', {
  action() {
    mount(MainLayout, {
      content: (<Login />)
    });
  }
});

FlowRouter.route('/signup', {
  action() {
    mount(MainLayout, {
      content: (<Signup />)
    });
  }
});
