import React, { Component } from "react";
import Container from '@mui/material/Container';
import ReactDOM from "react-dom";
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SaveIcon from '@mui/icons-material/Save';
import './ChatBox.css';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import photo from './Mourad.jpg'
// import CommentsPage from './CommentsPage'
import NavBar from "./NavBar";
import Description_Book from "./Description_Book";
import Tiptap from "./Tiptap";
import axios from 'axios';
import parse from 'html-react-parser';

function ChatBox(props){
  const [clicked, setClicked] = React.useState(false);
  const [reply, setReply] = React.useState("");
  console.log(props.user);
  const [user,setUser] = React.useState({});
  React.useEffect(() => {
    const fetch = async() => {
    try{
      const response = await axios.get('http://127.0.0.1:8800/api/users/'+props.user);
      console.log(response.data);
      setUser(response.data);
    }catch(error){
      console.log(error);
    }
    }
    fetch();
  } , [])


  const handleClick = event=> {

    switch(event.detail) {
      case 1 : {
        document.getElementById('cc').style.display='block';
        break;

      }

      case 2 : {
        document.getElementById('cc').style.display='none';
        break;
        
      
    }

  }
}
console.log(user);
    return(


 
   <div class="ChatBox">
     <div>
  <img className="image-comment" src={`${user.img}`} alt="Avatar" style={{ marginBottom : '2px'}}/>
  <div style={{display : 'flex',}}>
  <h4 style={{marginRight : '10px'}}>{user.name}</h4>
  <p style={{marginRight : '10px'}}>{props.comment.createdAt.slice(0,10)}</p>
  <p>{props.comment.createdAt.slice(12,16)}</p>
  </div>
  </div>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <p >{parse(props.comment.text)}</p> 
  <br></br>
  
  

  
  
 
  <div className="navbar" id="myNavbar">
  <a  className="comment" onClick={handleClick} ><CommentIcon/><span >Replies</span></a>
  <a ><ShareIcon/><span>Share</span></a>
  <a><SaveIcon/><span>Save</span></a>
  </div>
      

  
  <div   id = "cc" className="reply-section">

  <div className = "reply-message">
    <div className="image-reply">
    <img  src={photo} alt="Avatar" />
    </div>
    <div className="text-reply">
    <p className="reply-name">ahmad nabhan</p>
    <p className="reply-text">it is good ,.....jkdvioh diohZKcskh
     Sharelk k
    k ndnioidhv
    xiwj  kdcpw
    c,pdkc
    csjc
    cepekv
    kcoekcec 
    jcisjcoakco
    fceciej ocjo ojxojw</p>
    </div>
    </div>


    <div className = "reply-message">
    <div className="image-reply">
    <img  src={photo} alt="Avatar" />
    </div>
    <div className="text-reply">
    <p className="reply-name">ahmad nabhan</p>
    <p className="reply-text">it is good ,.....</p>
    </div>
    </div>


    <div className = "reply-message">
    <div className="image-reply">
    <img  src={photo} alt="Avatar" />
    </div>
    <div className="text-reply">
    <p className="reply-name">ahmad nabhan</p>
    <p className="reply-text">it is good ,.....</p>
    </div>
    </div>
  



<div>
<Tiptap className="textEditor"/>
<button className="reply-btn">Reply</button>
</div>


  
</div>

  </div>
  
    );
}



export default ChatBox ;



