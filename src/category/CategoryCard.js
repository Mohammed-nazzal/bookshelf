import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { Navigate, useNavigate } from 'react-router-dom';

export default function CategoryCard(props) {
    const [cat,setCat] = React.useState("")
    const navigate = useNavigate();

    function handleClick(){
        console.log('hghcvjhf');
        setCat(props.cat)
        navigate("/category/"+props.cat,{ state: props.cat  })
    }
  return (
      <div onClick={handleClick}>
    <Card  style={{ border: "1px solid green" }} sx={{ maxWidth: 345, borderRadius : '10px',borderColor : 'primary.main' }}>
      <CardHeader
        
        
        title={props.cat}
        
      />
      <CardMedia
        component="img"
        height="194"
        image={require('../image/'+props.cat+'.jpeg')}
        alt="Paella dish"
      />
      <CardContent></CardContent>
      
      <CardActions disableSpacing>
        
       
      </CardActions>
      
    </Card>
    </div>
  );
}
