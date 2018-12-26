import React from "react";

import "../App.css";
import Footer from "../commons/Footer";
import Header from "../commons/Header";

const  App = () => 
  (
    <div>
      <div className="container">
        
        <header>
          <Header /> 
        </header>
      </div>
      <footer className="container">
        <Footer />
      </footer>
    </div>
  );

export default App;
