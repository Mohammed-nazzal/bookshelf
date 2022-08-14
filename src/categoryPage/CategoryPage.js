import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Header from '../header/header.js'
import { useEffect,useState } from 'react';
import axios from 'axios'
import Cards from './CategoryPageCard.js';
import * as React from 'react';
import {useParams} from 'react-router-dom';

const CategoryPage = (props) => {
    const [data, setData] = React.useState([]);
    const params = useParams()


    useEffect(()=>{

        const fetch = async()=>{
            console.log(params);
            //Networks
            const res = await axios.get("http://127.0.0.1:8800/api/book/category/"+params.cat)
            setData(res.data)
            console.log(res);
        }
        fetch()
    },[])
    return (
        <div >
        <Header />
        <Grid container spacing={5} sx ={{ width: '80%', marginLeft : '10rem',marginRight : '10rem',marginBottom : '10rem' }}>
            {data.map((book, index) => {
                return (
                    <Grid item xs={12} sm = {6} md={4} lg={3}>
                    <Cards title={book.title}
              category={book.category}
              language={book.language}
              description={book.description}
              id = {book._id}
              author={book.author} 
              img={ book.img}
              publisher={book.publisher}
              minDescription={book.minDescription} />
                    </Grid>
                )
            })}
            
        </Grid>
        </div>
    );

}
export default CategoryPage;


