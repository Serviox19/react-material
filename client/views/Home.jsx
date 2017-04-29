import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardComponent from '../components/Card';

export default class Home extends Component {
  render(props) {
    return(
      <div>
        <h1>Home</h1>
        <MuiThemeProvider>
          <CardComponent
            headerText="Servio"
            headerSubtitle="Ceo"
            mediaTitle="This estate is worth 1.2Million Dollars"
          />
        </MuiThemeProvider>
      </div>
    )
  }
}

const styles = {

}
