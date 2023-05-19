
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
// import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    
    
  <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
  <Footer/>
  </BrowserRouter>
 
  
   
 
  
 
  
  );
}

export default App;
