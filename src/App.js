import './App.css';
import Selectpost from "./Pages/Selectpost";
import Postpage from "./Pages/Postpage";

import { Route, Link, Routes, } from "react-router-dom";

function App() {

  return (

      <div className="App-header">
          <div className='navBox'>
              <Link className='navLink' to="/" >
                Hem
              </Link>
              <h1 className='headTitle'>Fakeforum.com</h1>
              <Link className='navLink' to="/About" >
                Om oss
              </Link>
          </div>

      <Routes>
      
        <Route exact path="/" element={<Selectpost/>}/> 
        <Route path="/post/:id" element={<Postpage/>} />
      </Routes>
    
    </div>
    
  );
}

export default App;
