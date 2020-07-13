import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import MainSection from "./components/MainSection";

import {
    BrowserRouter as Router,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';

function App() {
  return (
    <Router>
        <div className="App">
            <Header/>
            <MainSection/>
            <Footer/>
        </div>
    </Router>
  );
}

export default App;
