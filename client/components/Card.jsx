import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style = {
  cardStyle: {
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

export default class CardComponent extends Component {
  render() {
    return(
      <Card
        style={style.cardStyle}
        zDepth={5}>
        <CardHeader
          title={this.props.headerText}
          subtitle={this.props.headerSubtitle}
          avatar={this.props.avatar}
        />
        <CardMedia
          overlay={<CardTitle title={this.props.mediaTitle} />}
        >
          <img src="/images/mansion.jpg" />
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    );
  }
}
