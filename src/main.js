import React ,{Component} from 'react';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from './header/header';
import Swipers from './swipers/Swipers.js';
import Footer from './Footer/Footer';

  const Main = () => {
      return (
<div>
      


  <Header/>
  <Swipers type = "Featured"/>
<Swipers type = "Recomended"/>
<Swipers type = "new"/>   
<Footer/>     
  </div>
  );
  
  }


 export default Main;
