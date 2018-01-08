import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Nav from './Nav.js';
import Home from './Home.js'
import FeedbackLoop from './Feedbackloop.js';
import Topmountains from './Topmountains.js';
import '../assets/styles/App.scss';
import Contact from './Contact.js';

const App = ({ name }) => {
  return (

    <Router>
      <switch>
        <Route exact path="/" component={Home} />
        <Route path="/feedbackloop" component={FeedbackLoop} />
        <Route path="/topmountains" component={Topmountains} />
        <Route path="/contact" component={Contact} />
      </switch>
    </Router>
  );
};


export default App;
