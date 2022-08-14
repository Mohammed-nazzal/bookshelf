import React from 'react';
import '../header/header.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import parse from 'html-react-parser';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Cards from '../swipers/card';
import axios from 'axios';
export default function Swipers(props){
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const fetchBook = async() =>{
      try{
          const res = await axios.get("http://127.0.0.1:8800/api/book/");
          setData(res.data);
          console.log(res.data); 
        }catch(e){
          console.log(e);
     }  }  
     fetchBook()
  },[])
    return(
        <div style={{display : 'flex',justifyContent : 'center', marginBottom: '10rem'}}>

<div style={{width : '80%'}}>
  <h1>{props.type}</h1>
    
<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      style={{ borderTop : '10px' }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    
      breakpoints={{
        // when window width is >= 640px
        480: {
            
            slidesPerView: 1,
        },

        
        786: {
          
          slidesPerView: 2,
        },
        // when window width is >= 768px
        1024: {
          
          slidesPerView: 2,
        },
        1100:{
            slidesPerView: 2,
        }
      }}
    >
      
      {data.map((book, index) => {
        return (
          <SwiperSlide key={index}>
            <Cards
              title={book.title}
              category={book.category}
              language={book.language}
              description={book.description}
              id = {book._id}
              author={book.author} 
              img={ book.img}
              
              publisher={book.publisher}
              minDescription={book.minDescription}

              
              
            />
          </SwiperSlide>
        );
      })}
      
      
      
    </Swiper>
    </div>
    </div>
    )
}