import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cards(props) {
  var props = props.pokemon;
  return (
    <Card sx={{ maxWidth: '20em', bgcolor: props.color, width: '15rem' }}>
      <CardActionArea>
        <CardMedia
          sx={{ width: 160, height: 160, margin: 'auto' }}
          image={props.image}
          title={props.name}
        />
        <CardContent direction="row">
          <Typography gutterBottom variant="h6" component="div">
            {props.id + ' | ' + props.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {props.type}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
