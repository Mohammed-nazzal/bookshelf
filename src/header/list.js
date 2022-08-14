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
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
const List = (anchor) => {
  const navigate = useNavigate();

    return(
    
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
                  <LibraryBooksIcon />
              </ListItemIcon>
              <ListItemText primary='Library' />
            </ListItemButton>
          </ListItem>
          <ListItem key='Favourites' disablePadding> 
            <ListItemButton>
              <ListItemIcon>
                  <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary='Favourites' />
            </ListItemButton>
          </ListItem>
          <ListItem key='Wishlist' disablePadding>
            <ListItemButton>
              <ListItemIcon>
                  <FavoriteIcon/>
              </ListItemIcon>
              <ListItemText primary='Wishlist'/>
            </ListItemButton>
          </ListItem>
        
      </List>
      <Divider />
      <List>
        {['Room1', 'Room2', 'Room3'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )};

export default List