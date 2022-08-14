import * as React from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import axios from 'axios';
import {red }from '@mui/material/colors';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';


export default function DescriptionDialog(props) {
  const navigate = useNavigate();
  console.log(props);
    const { onClose, selectedValue, open} = props;
  const handleClose = () => {
    onClose(selectedValue);
  };
  const [book,setBook] = React.useState({
    title: undefined, 
    category :undefined,
    img : undefined,
    language : undefined,
    description : undefined,
    author : [],
    publisher : undefined,//


  })
    const [author,setAuthor] = React.useState({
    name: undefined,
    country: undefined,
    background: undefined,
    language: undefined,
    img : "",
    })
    function openRoom(){
      navigate("/bookroom",{state : {book : props.id , author : props.authorId}})
    }
   function openBook() {
      navigate("/pdfViewer/"+props.fileId,{state : {book : props.id }});

   }
    async function addBook(){
        try{
            console.log(JSON.parse( localStorage.user)._id);
            const res = await axios.put("http://127.0.0.1:8800/api/users/getBook/"+JSON.parse( localStorage.user)._id,{"id" : props.id});
            console.log(res);
        }catch(err){

        }
    }
    async function addToWishList(){
        try{
            console.log(JSON.parse( localStorage.user)._id);
            const res = await axios.put("http://127.0.0.1:8800/api/users/addToWishList/"+JSON.parse( localStorage.user)._id,{"id" : props.id});
            console.log(res);
        }catch(err){

        }
    }
    return(
    <Dialog maxWidth='lg'  onClose={handleClose} open={open} sx= {{}}>
    <DialogTitle></DialogTitle>
    {/* <div className ="Card"> */}
        
      


       <div class="header" style={{textAlign : 'center'}}>
      <h1>{props.title}</h1>
      <br></br>
      <h4>{props.name}</h4>
      </div>

      <Grid container spacing={2} sx={{marginLeft : '10px',marginRight : '10px', marginBottom :'10px'}}>
     
        <Grid item xs={12} md={8} lg={6} sx = {{justifyContent  : 'center', alignContent : 'center', }}>
        <img src={props.img} alt="book" width="300px" height="300px"/>
        <h4 style={{marginBottom : '10px'}}>description </h4>
        <p style={{marginBottom : '20px'}}>{parse(props.description)}</p> 
        <h4 style={{marginBottom : '10px'}}>Publisher </h4>
        <p style={{marginBottom : '20px'}}>{parse(props.publisher)}</p>
        <h4 style={{marginBottom : '10px'}}>Category </h4>
        <p style={{marginBottom : '20px'}}>{parse(`props.category`)}</p>
        
        
        </Grid> 
        <Grid item xs={12} md={4} lg={6} >
        <h4 style={{marginBottom : '10px'}}>about author </h4>
        <img src={props.authorImg} alt="book" width="200px" height="200px"/>
        <p style={{width : '80%'}}>{parse("`"+props.authorBackground+"`")}</p>
        </Grid> 
        
        {
        props.type === "library" ? 
            <Grid item xs={12} md={6} lg={6} >
            <Button onClick={openBook}  variant='contained' sx ={{marginRight : '10px', }}>view pdf</Button>
            <Button onClick={openRoom}   variant='contained' sx ={{marginRight : '10px',backgroundColor : red[500]}}>view room</Button>
        </Grid>
     : 
              (<>
              <Grid item xs={12} md={6} lg={6} >
                <Button onClick={addBook} variant='contained' sx ={{marginRight : '10px', }}>Add to library</Button>
                <Button onClick={addToWishList}  variant='contained' sx ={{marginRight : '10px',backgroundColor : red[500]}}>Add to WhishList</Button>
            </Grid>     
            </>
            )  }
         
        </Grid>
      
  </Dialog>
); 
      
  }
  

