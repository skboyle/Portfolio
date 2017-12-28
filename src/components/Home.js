import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav.js';
import '../assets/styles/App.scss';


const Home = ({ name }) => {
  return (
    <div>
      <Nav/>
      <div className="container">
      <div className="home-greeting">
      <h3>Hi, I'm a web developer!</h3>
      <h4>I like making pretty user friendly websites. I have experience with Ruby, Rails, Sinatra, Javacsript, React, Node, SQL, Bootstrap, Foundation and SASS. Click though my portfolioto see my work. </h4>
    </div>
    </div>
    </div>
    );
  };


export default Home;
