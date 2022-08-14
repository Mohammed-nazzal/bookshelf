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
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DescriptionDialog from '../Description/DescriptionDialog';
import Button from '@mui/material/Button';
import parse from 'html-react-parser';
import axios from 'axios'
//import DescriptionDialog from '../swipers/DescriptionDialog.js';
// DescriptionDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired,
// };
const ExpandMore = styled((props) => {
  

  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest, 
  }),
}));

export default function Cards(props) {

  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [data, setData] = React.useState({

  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  React.useEffect(() => {
    const fetchBook = async() =>{
      try{
          const res = await axios.get("http://127.0.0.1:8800/api/author/"+props.author[0].split(":")[1]);
          setData(res.data);
          console.log(res.data); 
        }catch(e){
          console.log(e);
     }  }
     fetchBook()
  },[])
  return (
    <Card sx={{ maxWidth: 345, marginBottom : '10px' }}>
      <DescriptionDialog
          
          open={open}
          onClose={handleClose}
          title = {props.title}
          name = {data.name}
          img = {props.img}
          authorImg = {data.img}
          authorBackground = {data.background}
          description= {props.description}
          id= {props.id}
          publisher= {props.publisher}
          
          category= {props.category}

        />
      <CardHeader
        avatar={
          <Avatar src={data.img} sx={{ bgcolor: red[500] }} aria-label="recipe">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader="2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={props.img} 
        alt="Paella dish" 
      />
      <CardContent>
      {parse(props.minDescription)}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Button onClick={handleClickOpen} variant="contained">Description</Button>
        </IconButton>
        <IconButton aria-label="Add to Favourite">
          <FavoriteIcon sx ={{"&:hover": {
                         color: red[500],
                    cursor: "default"
                    }  }}/>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {parse(props.description)}
        </CardContent>
      </Collapse>
    </Card>
  );
}
