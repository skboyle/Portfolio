import React from 'react';
import PropTypes from 'prop-types';
import Feedbackloop from './Feedbackloop.js'
import { Link } from 'react-router-dom'

import '../assets/styles/App.scss';


const Nav = ({ name }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">S. Boyle</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to='/' className="nav-item nav-link">Home</Link>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Portfolio
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to='/feedbackloop' className="nav-item nav-link">Feedback Loop</Link>
                <Link to='/topmountains' className="nav-item nav-link">Top Mountains</Link>
              </div>
            </li>

            <a className="nav-item nav-link" href="#">Contact</a>
          </div>
        </div>
      </nav>
    </div>
    );
  };


export default Nav;
