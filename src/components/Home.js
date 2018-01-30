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
          <h3>Hi, {`I\'m`} a web developer!</h3>
          <h4>{` I like making fun, intuitive and user friendly websites. I have experience with Ruby on Rails, Sinatra, React.js, Node.ks, Python, Django, jQuery SQL, Bootstrap, Foundation and SASS.`}</h4>
          <div className="div1" id="one"></div>
          <div className="div1" id="two"></div>
          <div className="div1" id="three"></div>
          <div className="div1" id="four"></div>
        </div>
      </div>
    </div>
  );
};


export default Home;
