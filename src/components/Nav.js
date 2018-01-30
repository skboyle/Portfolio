import React from 'react';
import PropTypes from 'prop-types';
import Feedbackloop from './Feedbackloop.js'
import { Link } from 'react-router-dom'

import '../assets/styles/App.scss';


const Nav = ({ name }) => {
  return (
    <div>
      <ul className="topnav">
            <li>
              <Link to='/' className="">SKB</Link>
            </li>
            <li>
              <Link to='/feedbackloop' className="">FEEDBACK LOOP</Link>
            </li>
            <li>
              <Link to='/topmountains' className="">TOP MOUNTAINS</Link>
            </li>
            <li>
            <Link to='/contact' className="">CONTACT</Link>
          </li>
      </ul>
    </div>
  );
};


export default Nav;
