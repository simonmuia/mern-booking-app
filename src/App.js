
import './App.css';
import React from "react";
import Home from './pages/Home'
import List from './list/List'
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Hotel from './hotel/Hotel';



function App() {
  return (
    <BrowserRouter>
    <div>
     
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='/hotels' element={<List/>} />
        <Route path='/hotels/:id' element={<Hotel/>} />
      </Routes>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
