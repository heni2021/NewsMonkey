import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import logo from './logo.jpg';

// write rcep for basic structure along with propTypes
const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img src={logo} alt="Here comes logo" height='24px' />
                    <Link className="navbar-brand" to="/news">NewsMonkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/news">Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/news/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/news/technology">Technology</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
