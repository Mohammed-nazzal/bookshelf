import * as React from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
import Header from '../header/header';
import Grid from '@mui/material/Grid'
import Cards from './MyLibraryCard';
export default function MyLibrary(){
    const {user}  = React.useContext(AuthContext);
    const [data, setData] = React.useState([])
    
    React.useEffect(()=>{
        const fetch = async() => {
            try{ 
                const res = await axios.get(`http://127.0.0.1:8800/api/users/getBooks/${user._id}`)
                console.log(res.data);
                try{
                    const books = []
                    for(let book of res.data){
                        const response = await axios.get(`http://127.0.0.1:8800/api/book/${book}`)
                        console.log(response);
                        books.push(response.data)
                    }
                    setData(books)
                console.log(books);
                }catch(err){
                    console.log(err);
                }
                
            }
            catch(err){
                console.log(err);
            }
        }
        fetch()
    },[])
    return(<div>
        <Header/>

        <Grid container spacing={5} sx ={{ width: '80%', marginLeft : '10rem',marginRight : '10rem',marginBottom : '10rem' }}>
            {data.map((book, index) => {
                return (
                    <Grid item xs={12} sm = {6} md={4} lg={3}>
                    <Cards title={book.title}
              category={book.category}
              language={book.language}
              fileId = {book.fileId}
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
    </div>)

}
{/* <Grid container spacing={5} sx ={{ width: '80%', marginLeft : '10rem',marginRight : '10rem',marginBottom : '10rem' }}>
            {categories.map((category) => {
                return (
                    <Grid item xs={12} sm = {6} md={4} lg={3}>
                    <CategoryCard cat = {category} />
                    </Grid>
                )
            })}
            
        </Grid> */}