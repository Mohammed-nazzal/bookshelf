import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Header from '../header/header.js'
import CategoryCard from './CategoryCard';
import * as React from 'react'
import { AuthContext } from '../context/AuthContext.js';
const categories = ['Literature','Networks', 'Science', 'History', 'Art', 'Geograpghy', 'Technology'];

const Category = (props) => {
    const { user } = React.useContext(AuthContext);
    console.log(user);
    return (
        <div >
        <Header />
        <Grid container spacing={5} sx ={{ width: '80%', marginLeft : '10rem',marginRight : '10rem',marginBottom : '10rem' }}>
            {categories.map((category) => {
                return (
                    <Grid item xs={12} sm = {6} md={4} lg={3}>
                    <CategoryCard cat = {category} />
                    </Grid>
                )
            })}
            
        </Grid>
        </div>
    );

}
export default Category;


