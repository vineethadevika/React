import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Main from './Components/Main';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home';
import SignIn from './Components/Login/SignIn';
import Contact from './Components/Contact/Contact';
import Slider from './Carousel/Slider';
import Button from './Components/CreateResume';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Home/>
      <Slider/>
        <Button/>
        <Routes>
           <Route path="/signIn" element={<SignIn/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/main" element={<Main/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
