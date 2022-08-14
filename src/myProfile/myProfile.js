import * as React from 'react';
import { countriesa } from './countries';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import { AuthContext } from '../context/AuthContext';
import Button from '@mui/material/Button';
import Header from '../header/header';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import axios from 'axios'
import Divider from '@mui/material/Divider';
import FileBase64 from 'react-file-base64';
import Switch from '@mui/material/Switch';

const categories = ['Literature','Networks', 'Science', 'History', 'Art', 'Geograpghy', 'Technology'];
var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
export const MyProfile = (props) => {
    const showActivity= true
    const showBooks= true
    const showFriends= true
    const showRooms= true
    
    console.log(localStorage.getItem("user"));
    const [img, setImg] = React.useState("");
    const [userInfo, setUserInfo] = React.useState({
        Country: "",
        _id: "",
        annotations: [] ,
        books: [],
        categories: [] ,
        comments: [],
        created_at: "",
        email: "",
        friends: [] ,
        img: "",
        name: "",
        replys: [] ,
        reviews: [] ,
        showActivity: true,
        showBooks: true,
        showFriends: true,
        showRooms: true,
        wishList: [],
    });

    const { user } = React.useContext(AuthContext);

    React.useEffect(() => {
        const fetch = async() => {
            console.log(user._id);
            const res = await axios.get('http://127.0.0.1:8800/api/users/'+user._id);
            console.log(res.data);
            localStorage.setItem("user", JSON.stringify(res.data));
            setUserInfo(res.data);
            showActivity = res.data.showActivity;
            showBooks = res.data.showBooks;
            showFriends = res.data.showFriends;
            showRooms = res.data.showRooms;


            
        }
        fetch();
    } , []); 
    
    //
    const  handlecategoriesChange = (value) =>{
        setUserInfo((prev) => ({ ...prev, categories: value}));
    }
    const  handleCountryChange = (value) => {
        setUserInfo((prev) => ({ ...prev, Country: value}));
    }
    async function handleSave() {
        localStorage.setItem("user", JSON.stringify(userInfo));
        try{
        const res = await axios.put('http://127.0.0.1:8800/api/users/'+user._id, userInfo);
        

        console.log(userInfo);
        window.alert("Profile Updated");
        }catch(err){
            window.alert("Error");
        }
    }
    console.log(userInfo);
    function handleChange (event) {
        console.log(event.target.name);
        setUserInfo((prev) =>( {...prev,[ event.target.name] : event.target.checked}));
      };
    return(
        <div>
        <Header />
            

            <Grid container spacing={3} sx ={{ width: '80%', marginLeft : '10rem',marginRight : '10rem',marginBottom : '10rem' }}>
                <Grid item xs={6} >
                    <List>
                    <ListItem>
                    <FileBase64
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setImg(base64)}
                    />                   
                     </ListItem>
                    <ListItem>
                    <Button variant='contained' onClick={() => {setUserInfo({...userInfo, img : img})}} sx = {{ marginBottom : 1 }}>Change Image</Button>
                    </ListItem>
                    <ListItem>
                    <img width='100px' height= '100px' src = {`${userInfo.img}`}></img>
                    </ListItem>
                    <ListItem>
                    <TextField label="Name" value={userInfo.name} onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} />
                    </ListItem>
                    <ListItem>
                    <Autocomplete
                    multiple
                    id="authors"
                    options={categories}
                    sx = {{width : '30%'}}
                    defaultValue={user.categories}
                    onChange={(event, value)=> handlecategoriesChange(value)}
                    renderInput={(params) => (
                    <TextField
                    
                    
                    id = 'categories'
                        {...params}
                        variant="standard"
                        label="categories"
                        placeholder="Categories"
                        sx={{ width : '300%'}} 
                        
                    />

                    )}
                    />
                    </ListItem>
                    <ListItem>
                        <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        defaultValue={user.Country}
                        options={country_list}
                        sx={{ width: 300 }}
                        onChange = {(event,value) => handleCountryChange(value)}
                        renderInput={(params) => <TextField {...params} label="Country" />}
                        />                    
                    </ListItem>
                     

                    
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <List>
                        <ListItem>
                        <TextField id="email" label ="email" sx = {{mt : 2}}  defaultValue={user.email} InputProps={{readOnly: true,}}/>

                        </ListItem>
                        <ListItem>
                        <TextField id="created at" label ="created at" sx = {{mt : 2}}  defaultValue={user.created_at.slice(0,13)} InputProps={{readOnly: true,}}/>
                        </ListItem>
                        <ListItem>
                        <h4>show activity</h4>
                        <Switch inputProps={{ 'aria-label': 'controlled' }}  checked={userInfo.showActivity} name = "showActivity" onChange={handleChange}/>
                        </ListItem>
                        <ListItem>
                        <h4>show Rooms</h4>
                        <Switch inputProps={{ 'aria-label': 'controlled' }}  checked={userInfo.showRooms} name = "showRooms" onChange={handleChange}/>
                        </ListItem>
                        <ListItem>
                        <h4>show friends</h4>
                        <Switch inputProps={{ 'aria-label': 'controlled' }} color="warning" name = "showFriends" checked={userInfo.showFriends} onChange={handleChange}/>
                        </ListItem>
                        <ListItem>
                        <h4>show books</h4>
                        <Switch       inputProps={{ 'aria-label': 'controlled' }} color="secondary" name = "showBooks" checked={userInfo.showBooks} onChange={handleChange}/>
                        </ListItem>
                    </List>
                
                </Grid>
                <Grid item xs={6}>
                <Divider sx = {{mb : 2}}/>
                <Button onClick={handleSave} variant='contained'>Save</Button>
                </Grid>
                </Grid>
           
        </div>

    )


}