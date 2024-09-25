import './App.css';
import React, { Component } from 'react';
import News from './components/News';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes, // Use Routes instead of Switch
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize=10;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes> {/* Use Routes here */}
            <Route exact path="/" element={<News key="general" pageSize={this.pageSize} category="general" country="in" />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} category="sports" country="in" />} />
            <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} category="business" country="in" />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} category="technology" country="in" />} />
            <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} category="general" country="in" />} />
            <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} category="health" country="in" />} />
            <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} category="science" country="in" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} category="entertainment" country="in" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
