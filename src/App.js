import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Output from "./pages/Output";
import Body from "./pages/Body";

function App() {
 
  return (
    <Router>
    <div className="App">
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Body /> } /> 
          <Route path="/shop" element={<Output /> } />  
        </Routes>  
      <Footer />
    </div>
    </Router>
  );
}

export default App;