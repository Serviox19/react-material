import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style = {
  cardStyle: {
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

const CardComponent = () => (
  <Card
    style={style.cardStyle}
    zDepth={5}>
    <CardHeader
      title="Servio Mora"
      subtitle="Ceo"
      avatar="/images/avatar.jpg"
    />
    <CardMedia
      overlay={<CardTitle title="Personal Estate" subtitle="Est. Value 3.5M" />}
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

export default CardComponent;
