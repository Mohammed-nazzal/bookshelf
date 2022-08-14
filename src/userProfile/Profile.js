import { Image } from 'semantic-ui-react'

import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Header from '../header/header';
import Grid from '@mui/material/Grid';
import Swipers from './Swipers';
import Button from '@mui/material/Button';
const Profile = () => {
    const [addFriend, setAddFriend] = useState("");

    const { user } = useContext(AuthContext);
    return(
        <div>
            <Header/>
           
            <Grid container spacing={2} sx ={{ width: '80%', marginLeft : '10rem',marginRight : '10rem',marginBottom : '10rem' }}>
                <Grid item  xs ={3}>
                <div>
                    <Button onClick={(e)=> setAddFriend("none")} variant = 'contained' sx={{display : {addFriend},mb:3}}>Add Friend +</Button>
                </div>
                <img src = {require('../image/Science'+'.jpeg')}  width='100px' height='100px' />
                <h2 style={{margin: '10px', marginLeft : '0px'}}>{"Name : " + user.name}</h2>
                <h2 style={{margin: '10px', marginLeft : '0px'}}>{"Categories : " + user.category}</h2>
                <h2 style={{margin: '10px', marginLeft : '0px'}}>{"Member Since : " + user.created_at.substring(0,10)}</h2>
                
                </Grid>
                <Grid item  xs ={9}>
                <Swipers type = 'books'/>

                <Swipers type = 'rooms'/>
                <div  style={{  borderColor : 'grey', border : 'solid 3px',borderRadius : '5px'}}>nk</div>

                
                </Grid>

            </Grid>

        </div>
    )
}

export default Profile;