import React, { Component } from "react";
import Container from '@mui/material/Container';
import ReactDOM from "react-dom";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider'
import Rating from '@mui/material/Rating';
import ChatBox from './ChatBox';
import './BookRoom.css';
import  Grid  from "@mui/material/Grid";
import Book from './Book.jpg';
import Author from './Author.jpg' ;
import "./BookRoom.css";
import Tiptap from "./Tiptap";
import Header from "../header/header";
import Button from '@mui/material/Button';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from "../context/AuthContext";
import { Stack } from "@mui/material";


function BookRoom(props){
  const {user} = React.useContext(AuthContext);
  const location = useLocation();
  const Ratings = {
    generalRating : 0,
    difficaltyRating : 0,
    objectivityRating : 0,
    clarityRating : 0,
    realismRating : 0,
    theLanguage : 0
  }
  
  const [ratings, setRatings] = React.useState({generalRating : 0,
    difficaltyRating : 0,
    objectivityRating : 0,
    clarityRating : 0,
    realismRating : 0,
    theLanguage : 0});

  const [author, setAuthor] = React.useState({
    img : undefined,
    name : undefined,
    country : undefined,
    language : undefined,
    backGround : undefined,
  });
  const [book,setBook] = React.useState({
    name : undefined,
    category : [],
    img : undefined,
    blog : undefined,

  })
  const [comments, setComments] = React.useState([])
  const [comment, setComment] = React.useState("")

  React.useEffect(() => {
    const fetch = async() => {
    try{
      const bookRes = await axios.get("http://127.0.0.1:8800/api/book/"+location.state.book);
      setBook(bookRes.data);
      const author = await axios.get("http://127.0.0.1:8800/api/author/"+location.state.author);
      setAuthor(author.data);
      const ratingRes = await axios.get("http://127.0.0.1:8800/api/blog/rating/"+bookRes.data.blog);
      setRatings(ratingRes.data);
      const commentsRes = await axios.get("http://127.0.0.1:8800/api/blog/"+bookRes.data.blog);
      let arr = []
      for(let i of commentsRes.data.comments){
        const res = await axios.get("http://127.0.0.1:8800/api/comment/"+i);
        arr.push(res.data);  
      }
      setComments(arr);



    }catch(err){
      window.alert(err);
    }
  }
  fetch();
  },[])
  

  const displayEditor =()=> {
  console.log('clicked');
  document.getElementById('ed').style.display='block' ;
  document.getElementById('cb').style.display='none' ;
  }
  document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('ed');
    if (!container.contains(e.target)) {
        container.style.display = 'none';
        document.getElementById('cb').style.display='block' ;
    }
});


  const handleSend =async ()=> {
    try{
      const res = await axios.post("http://127.0.0.1:8800/api/comment/"+book.blog,{text : comment, user : user} )
      
      console.log(res);
    }catch(err){
      window.alert(err);
    }
    document.getElementById('ed').style.display='none' ;
    document.getElementById('cb').style.display='block' ;

  }


  console.log(location.state.book);
  return(
<div className="BookRoom">

 <Header/>
 <Grid container spacing={3}>
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <div className="card" style = {{ display : 'flex', justifyContent : 'center', flexDirection : 'column'}}>
    <img width='200px' height='200px' src={`${book.img}`} alt="Avatar"/>
    <div className="container_card">
    <h4><b>{book.title}</b></h4>
    <p>{book.category.map((cat) => cat+" ")}</p>
    </div>
      </div>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={4}>
    <div className="card">
   <div className="container_card">

   <h2>Ratings</h2>
   <p>General rating</p>
   <p className="rate">{ratings.generalRating}%</p>
  

   <p>difficalty rating</p>
   <p className="rate">{ratings.difficaltyRating}%</p>
  

  <p>Objectivity rating</p>
  <p className="rate">{ratings.objectivityRating}%</p>
  

  <p>Clarity rating</p>
  <p className="rate"> {ratings.clarityRating}%</p>
  

  <p>Realism rating</p>
  <p className="rate">{ratings.realismRating}%</p>
  

  <p>The language</p>
  <p className="rate">{ratings.theLanguage}%</p>
 



   </div>
    </div>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={4}>
    <div className="card">
   <img width = '200px' height= '200px' src={`${author.img}`} alt="Avatar"/>
   <div className="container_card">
   <h4><b>{author.name}</b></h4>
   <p>{author.backGround}</p>
   </div>
    </div>

    

  
    </Grid>
 </Grid>
  
<div className="row">
  <div className="column side" >

  <div className="card">

  <h3>Rate the book</h3>

  <p>General rating</p>
  <Box >
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" sx = {{color:'green',width:'80%',marginLeft:'20px',marginRight:'5px'}}/>
    </Box>

  <p>difficalty rating</p>
  <Box >
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" sx = {{color:'green',width:'80%',marginLeft:'20px',marginRight:'5px'}}/>
    </Box>

  <p>Objectivity rating</p>
  <Box >
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" sx = {{color:'green',width:'80%',marginLeft:'20px',marginRight:'5px'}}/>
    </Box>

  <p>Clarity rating</p>
  <Box >
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" sx = {{color:'green',width:'80%',marginLeft:'20px',marginRight:'5px'}}/>
    </Box>

  <p>Realism rating</p>
  <Box >
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" sx = {{color:'green',width:'80%',marginLeft:'20px'}}/>
    </Box>

  <p>The language</p>
  <Box >
      <Slider   defaultValue={50} aria-label="Default" valueLabelDisplay="auto" sx = {{color:'green',width:'80%',marginLeft:'20px'}}/>
      <Button onClick={()=>{console.log(comment);}} variant="contained" color="primary" >Submit</Button>
  </Box>
    



  </div>

  
  </div>

  <div className="column middle" >
    {comments.map((comment)=>{
      return(
        <ChatBox ClassName="chat" comment = {comment} user = {comment.user} text={comment.text}/>
      )
    })}
    
    

    
    </div>



  
</div>

<div  id ="ed" className="footer">
 

<div  className="write-comment">
      <Tiptap setComment={(html => setComment(html))}/>
      <div>
      <button className="Send-btn" onClick={handleSend}>Send</button>
      </div>
      </div>  
</div>



<button id="cb" onClick={displayEditor}>Add comment</button>

</div>

        );
    
}



export default BookRoom ;



