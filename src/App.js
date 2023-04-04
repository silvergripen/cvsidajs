import { NavbarComponent } from "./components/NavBar.js";
import { HomeComponent } from "./components/Home.js";
import { CvComponent } from "./components/Cv.js";
import { EasterKey} from "./components/EasterKey.js";
import { Porfolio } from "./components/Portfolio.js"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from "react";
import { Button } from "react-bootstrap";
import './Css/design.css'


//
function App() {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick =() => {
    setIsToggled(!isToggled)
} 
  return (
    <div className={`App min-vh-100  ${(isToggled === true)? 'background-pviolet' : 'background-white'}`}>
      <Router>
      <NavbarComponent />
      <Routes>
        <Route path ="/" element={<HomeComponent/>}/>
        <Route path ="Cv" element={<CvComponent/>}/>
        <Route path ="Portfolio" element={<Porfolio/>}/>
      </Routes>
    </Router>
    <EasterKey/>
    <div className='footer_design' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' >
          Kenneth Hedberg Molén
        </a>
        <div className="button-position">
         <Button onClick={handleClick} className={'opacity-0'}>bg</Button>
        </div> 
      </div>
    </div>
    
    
  );
}

export default App;

//href='https://mdbootstrap.com/'
