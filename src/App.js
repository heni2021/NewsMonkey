import './App.css';

import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
// import About from './component/About';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

// write rcc to automatically create class based component
export default class App extends Component {
  // c = "Hello World"; // class variable
  pageSize = 15;
  apiKeyValue = process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }
  setProgress = (progress) =>{
    this.setState({
      progress: progress
    });
  }
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <LoadingBar
            color='red'
            progress={this.state.progress}
            height={3}
          />
          {console.log(this.state.progress)}
          <div className='container my-3'>
            {/* Hello my first class based component! - {this.c}  */}
            {/* refer to class variable */}
            <Routes>
              <Route exact path="/news" element={<News setProgress={this.setProgress}  key="general" pgSize={this.pageSize} apiKey={this.apiKeyValue} country="in" />} />
              {/* <Route exact path="/about" element={<About />} /> */}
              <Route exact path="/news/business" element={<News setProgress={this.setProgress}  key="business" pgSize={this.pageSize} apiKey={this.apiKeyValue} country="in" category="business" />} />
              <Route exact path="/news/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" pgSize={this.pageSize} apiKey={this.apiKeyValue} country="in" category="entertainment" />} />
              <Route exact path="/news/health" element={<News setProgress={this.setProgress}  key="health" pgSize={this.pageSize} apiKey={this.apiKeyValue} country="in" category="health" />} />
              <Route exact path="/news/science" element={<News setProgress={this.setProgress}  key="science" pgSize={this.pageSize} apiKey={this.apiKeyValue} country="in" category="science" />} />
              <Route exact path="/news/sports" element={<News setProgress={this.setProgress}  key="sports" pgSize={this.pageSize} apiKey={this.apiKeyValue} country="in" category="sports" />} />
              <Route exact path="/news" element={<News setProgress={this.setProgress}  key="general" pgSize={this.pageSize} apiKey={this.apiKeyValue} country="in" category="general" />} />
              <Route exact path="/news/technology" element={<News setProgress={this.setProgress}  key="technology" pgSize={this.pageSize} apiKey={this.apiKeyValue} country="in" category="technology" />} />
            </Routes>
          </div>
        </Router>
      </>
    )
  }
}

// render is a lifecycle method which helps to render html on screen