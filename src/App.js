import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Icons from "./components/Icons";

function App() {
 
  return (
    <Router>
    <div className="App">
      <Navbar />
        <Routes>
          {/* <Route exact path="/"/></Route> */}
          <Route path="/" element={<Icons />} />
        </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;