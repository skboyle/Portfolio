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
          <h3>Steven Boyle</h3>
          <h5>{` I like making fun, intuitive and user friendly websites.`}</h5><br/>
          <p>
            LANGUAGES -  Ruby, JavaScript, Python, HTML5, CSS3, SASS, jQuery <br/><br/>
            FRAMEWORKS - Ruby on Rails, React.js, Node.js, Redux, jQuery, Django, Foundation, Bootstrap, Material UI, Rspec, Capybara, Jasmine-Enzyme, Karma <br/><br/>
            DATABASE SYSTEMS - PostgreSQL, MongoDB
          </p>
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
