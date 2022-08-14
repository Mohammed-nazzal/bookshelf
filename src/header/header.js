import React from 'react';
import './header.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { red, green, blue } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Swipers from '../swipers/Swipers';
//MUI
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ThemeProvider, createMuiTheme } from '@mui/material/styles';
import AccountMenu from './AccountMenu';
import Typography from '@mui/material/Typography';
import Category from '../category/category';
import { Navigate } from 'react-router-dom';



const Header = () => {
        const navigate = useNavigate()
        const [state, setState] = React.useState({
          top: false,
          left: false,
          bottom: false,
          right: false,
        });
      
        const toggleDrawer = (anchor, open) => (event) => {
          if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
      
          setState({ ...state, [anchor]: open });
        };
      
        const list = (anchor) => (
          <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <List>
              
                <ListItem key='Library' disablePadding>
                  <ListItemButton onClick={() => {navigate("/myLibrary")}}>
                    <ListItemIcon>
                        <LibraryBooksIcon fontSize= 'large' sx={{
                    
                    color: blue[500],
                    cursor: "default"
                    
                }} />
                    </ListItemIcon>
                    <ListItemText primary='Library' />
                  </ListItemButton>
                </ListItem>
                
                <ListItem key='Wishlist' disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                        <FavoriteIcon fontSize= 'large' sx={{
                    
                    color: red[500],
                    cursor: "default"
                    
                }}/>
                    </ListItemIcon>
                    <ListItemText primary='Wishlist'/>
                  </ListItemButton>
                </ListItem>
              
            </List>
            <Divider />
            
                <Typography
                sx={{ mt: 0.5, ml: 2 }}
                color="text.secondary"
                display="block"
                variant="caption"
                fontSize={16}
                >
                Rooms
                </Typography>
            
            <List>
              {['HistoryLovers', 'HighIQ', 'ChessMasters'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MeetingRoomIcon fontSize= 'large' sx={{
                    
                    color: green[500],
                    cursor: "default"
                    
                }}/>
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider  />
            
                <Typography
                sx={{ mt: 0.5, ml: 2 }}
                color="text.secondary"
                display="block"
                variant="caption"
                fontSize={16}
                >
                Contacts
                </Typography>
            
            <List>
              {['history_lover1234', 'chess.me', 'kew'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                    <Avatar alt="Remy Sharp" src={require('../image/blog-1.jpg')} />

                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        );
      

      
  
    const matches = useMediaQuery('(min-width:600px)');
    function fadeOut(){
        setTimeout(loader, 4000);
      }
      function loader(){
        document.querySelector('.loader-container').classList.add('active');
      }
      
    const searchForm = document.getElementById('search-form');

    const onClickSearch = (e) =>{ 
        e.target.classList.toggle('active');
        searchForm.classList.toggle('active');
        console.log(e.target.classList);
    }

    window.onscroll = () =>{

    searchForm.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

    window.onload = () =>{
        
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }

    fadeOut();

    }
    const handleCat = () => {
      navigate("/category")
      console.log("aa");
    }
    const handleHome= () => {
      navigate("/")
      console.log("aa");
    }
    return (
        
        <div >
           
        <header class="header">
        <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>

            <link rel="stylesheet" href="css/style.css"/>
            <div class="header-1">
            <React.Fragment key={'left'}>
          <Button onClick={toggleDrawer('left', true)}><MenuIcon /></Button>
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
        </React.Fragment>
            <a href="#" class="logo"> <i class="fas fa-book"></i> Readers Club </a>
            
            
            <form  action="" id = 'search-form' class="search-form">
                <input  type="search" name="" placeholder="search here..." id="search-box"/>
                <label for="search-box" class="fas fa-search"></label>
            </form>

            <div class="icons">
                
                <div onClick={onClickSearch} id="search-btn" class="fas fa-search"></div>
                
               
                
            </div>
            <AccountMenu/>
            </div>

            <div class="header-2">
                <nav class="navbar">
                    <a  onClick={handleHome}  href="#home">home</a>
                    <a href="#featured">featured</a>
                    <a href="#arrivals">arrivals</a>
                    <a  onClick={handleCat} href="#blogs">Categories</a>
                    <a  >Rooms</a>
                </nav>
            </div>

</header>
<nav class="bottom-navbar">
    <a href="#home" class="fas fa-home"></a>
    <a href="#featured" class="fas fa-list"></a>
    <a href="#arrivals" class="fas fa-tags"></a>
    <a href="#reviews" class="fas fa-comments"></a>
    <a href="#blogs" class="fas fa-blog"></a>
</nav>

{/* <Swipers type = "Featured"/>
<Swipers type = "Recomended"/> */}
{/* <Category/> */}

</div>
    )
}
export default Header;