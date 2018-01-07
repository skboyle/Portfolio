import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav.js';
import '../assets/styles/App.scss';


const Feedbackloop = ({ Feedbackloop }) => {
  return (
    <div>
      <Nav/>
      <div className="portfolio-page">
      <div className="project-title">
      <h1>Feedback Loop</h1>
      <p className="project-text">Feedback Loop is a forum for music makers that encourages users to make helpful critiques and share music. Feedback loop is built with React, Rails and custom CSS. Users can log in and share songs with Spotify and Omniauth.</p>
      </div>
      <div className="side-display">
      <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    </ol>

    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src="https://i.imgur.com/jEG1vzh.jpg" alt="First slide"/>
      </div>

      <div className="carousel-item">
        <img className="d-block w-100" src="https://i.imgur.com/3cn0kbB.jpg" alt="Second slide"/>
      </div>

      <div className="carousel-item">
        <img className="d-block w-100" src="https://i.imgur.com/VtEp5eX.jpg" alt="Third slide"/>
      </div>

      <div className="carousel-item">
        <img className="d-block w-100" src="https://i.imgur.com/soZy4vL.png" alt="Fourth slide"/>
      </div>

    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="false"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="false"></span>
      <span className="sr-only">Next</span>
    </a>
    </div>
    </div>
    </div>
    </div>
    </div>
    );
  };


export default Feedbackloop;
