import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { green } from "@mui/material/colors";

const Footer = () => {
    return (
        <Grid container spacing={5} sx ={{ backgroundColor : green[500], paddingLeft : '10px'}}>
        <Grid item xs={12} sm = {6} md={4} lg={3}>
            <h1>Explore</h1>
            <Link to="/main"><p>Home Page</p></Link>
            <Link to="/category"><p>Categories</p></Link>
            <Link to="/rooms"><p>rooms</p></Link>
            
        </Grid>
        <Grid item xs={12} sm = {6} md={4} lg={3}>
            <h1>Popular Content</h1>

        </Grid>
        <Grid item xs={12} sm = {6} md={4} lg={3}>
            <h1>contact Us</h1>
        </Grid>
        </Grid>
    );
}
export default Footer;