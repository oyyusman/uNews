
import './App.css';
import News from './Components/News';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  
  Route,
  Routes,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
// snippets rcc
export default class App extends Component {
  pageSize=10;
  render() {
    return (
      <div>

  <Router>

  <Navbar/>
  <LoadingBar
        color='#f11946'
        progress={10}
       
      />

 <div className="container">
<Routes>
<Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
              <Route exact path="/Business" element={<News key="Business" pageSize={this.pageSize} country="in" category="business" />} />
              <Route exact path="/General" element={<News key="General" pageSize={this.pageSize} country="in" category="general" />} />
              <Route exact path="/Health" element={<News key="Health" pageSize={this.pageSize} country="in" category="health" />} />
              <Route exact path="/Science" element={<News key="Science" pageSize={this.pageSize} country="in" category="science" />} />
              <Route exact path="/Sports" element={<News key="Sports" pageSize={this.pageSize} country="in" category="sports" />} />
              <Route exact path="/Technology" element={<News key="Technology" pageSize={this.pageSize} country="in" category="technology" />} />
    </Routes>
    </div>
    
        
        </Router>
        
        
      </div>
    )
  }
}
