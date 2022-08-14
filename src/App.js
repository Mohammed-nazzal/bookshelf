import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import Main from "./main";
  import SignIn from './SignIn'
  import SignUp from "./SignUp";
  import Category from "./category/category";
  import CategoryPage from  "./categoryPage/CategoryPage";
  import MyLibrary from "./myLibrary/MyLibrary";
  import PdfViewer from "./pdfViewer/PdfViewer";
  import Profile from "./userProfile/Profile";
  import {MyProfile} from "./myProfile/myProfile";
  import BookRoom from "./bookRoom/BookRoom";
  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/category/:cat" element={<CategoryPage/>}/>
          <Route path="/myLibrary" element={<MyLibrary/>}/>
          <Route path="/pdfViewer/:pdf" element={<PdfViewer/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/myProfile" element={<MyProfile/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/bookroom" element={<BookRoom/>}/>



        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;
  