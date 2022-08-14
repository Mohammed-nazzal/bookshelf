import * as React from 'react';
import './Description_Book.css' ;
import book from './Book.jpg' ;
import author from './Author.jpg' ;
import CloseIcon from '@mui/icons-material/Close';
// import { Container } from '@mui/system';
import Container from '@mui/material/Container';


function Description_Book() {
    return (
      <div className ="Background">
      <div className ="Card">
        <button className="close"><CloseIcon/></button>
      


       <div class="header">
      <h2>Book Name</h2>
      <h3>Author Name</h3>
      </div>

  
      <div class="row">
      <div class="Author" >
        <img src={author}/>
        
      
       
        <p>asdd a ocj jcj  okvokv v joevj ji ckvji  jijve v
          vjiejvi ji j ifviei nnnv ioi qfdsvs cnasi pao  accihf  oais
          adjo oqo cqid jca o niv oaoc j joac jcaocj jocj so jcaocj
          jvofjv oj o oo pap j ojd[p]
        </p>
        </div>



      <div class="Description" >
      <p>asdd a ocj jcj  okvokv v joevj ji ckvji  jijve v
          vjiejvi ji j ifviei nnnv ioi qfdsvs cnasi pao  accihf  oais
          adjo oqo cqid jca o niv oaoc j joac jcaocj jocj so jcaocj
          jvofjv oj o oo pap j ojd[p]
        </p>
      </div>


      <div class="Book-image" >
        <img src={book}/>
        </div>
      </div>

      

      <div class="btn-container">
    
        <button>Go to room</button>
    
        
      </div>






      </div>




     
      </div>
    );
  }
  
 export default Description_Book ;

