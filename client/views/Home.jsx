import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class Home extends TrackerReact(React.Component) {
  render() {
    return(
      <div>
          <h1>Home</h1>
      </div>
    )
  }
}
