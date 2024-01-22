import './App.css';

import React, { useState } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
// import About from './component/About';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

// write rcc to automatically create class based component
const App = () => {
  const pageSize = 15;
  const apiKeyValue = process.env.REACT_APP_NEWS_API
  const[progress, setProgress] = useState(0);
    return (
      <>
        <Router>
          <NavBar />
          <LoadingBar
            color='red'
            progress={progress}
            height={3}
          />
          <div className='container my-3'>
            {/* Hello my first class based component! - {c}  */}
            {/* refer to class variable */}
            <Routes>
              <Route exact path="/news" element={<News setProgress={setProgress}  key="general" pgSize={pageSize} apiKey={apiKeyValue} country="in" />} />
              {/* <Route exact path="/about" element={<About />} /> */}
              <Route exact path="/news/business" element={<News setProgress={setProgress}  key="business" pgSize={pageSize} apiKey={apiKeyValue} country="in" category="business" />} />
              <Route exact path="/news/entertainment" element={<News setProgress={setProgress}  key="entertainment" pgSize={pageSize} apiKey={apiKeyValue} country="in" category="entertainment" />} />
              <Route exact path="/news/health" element={<News setProgress={setProgress}  key="health" pgSize={pageSize} apiKey={apiKeyValue} country="in" category="health" />} />
              <Route exact path="/news/science" element={<News setProgress={setProgress}  key="science" pgSize={pageSize} apiKey={apiKeyValue} country="in" category="science" />} />
              <Route exact path="/news/sports" element={<News setProgress={setProgress}  key="sports" pgSize={pageSize} apiKey={apiKeyValue} country="in" category="sports" />} />
              <Route exact path="/news" element={<News setProgress={setProgress}  key="general" pgSize={pageSize} apiKey={apiKeyValue} country="in" category="general" />} />
              <Route exact path="/news/technology" element={<News setProgress={setProgress}  key="technology" pgSize={pageSize} apiKey={apiKeyValue} country="in" category="technology" />} />
            </Routes>
          </div>
        </Router>
      </>
    )
}

export default App

// render is a lifecycle method which helps to render html on screen