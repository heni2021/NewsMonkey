import './App.css';

import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
// import About from './component/About';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


// write rcc to automatically create class based component
export default class App extends Component {
  // c = "Hello World"; // class variable
  pageSize = 15;
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <div className='container my-3'>
            {/* Hello my first class based component! - {this.c}  */}
            {/* refer to class variable */}
            <Routes>
              <Route exact path="/news" element={<News key="general" pgSize={this.pageSize} apiKey="f491e17a5ca845c6898942d3227ac035" country="in" />} />
              {/* <Route exact path="/about" element={<About />} /> */}
              <Route exact path="/news/business" element={<News key="business" pgSize={this.pageSize} apiKey="f491e17a5ca845c6898942d3227ac035" country="in" category="business" />} />
              <Route exact path="/news/entertainment" element={<News key="entertainment" pgSize={this.pageSize} apiKey="f491e17a5ca845c6898942d3227ac035" country="in" category="entertainment" />} />
              <Route exact path="/news/health" element={<News key="health" pgSize={this.pageSize} apiKey="f491e17a5ca845c6898942d3227ac035" country="in" category="health" />} />
              <Route exact path="/news/science" element={<News key="science" pgSize={this.pageSize} apiKey="f491e17a5ca845c6898942d3227ac035" country="in" category="science" />} />
              <Route exact path="/news/sports" element={<News key="sports" pgSize={this.pageSize} apiKey="f491e17a5ca845c6898942d3227ac035" country="in" category="sports" />} />
              <Route exact path="/news" element={<News key="general" pgSize={this.pageSize} apiKey="f491e17a5ca845c6898942d3227ac035" country="in" category="general" />} />
              <Route exact path="/news/technology" element={<News key="technology" pgSize={this.pageSize} apiKey="f491e17a5ca845c6898942d3227ac035" country="in" category="technology" />} />
            </Routes>
          </div>
        </Router>
      </>
    )
  }
}

// render is a lifecycle method which helps to render html on screen