import React, { Component } from 'react';
import resumeData from '../../resumeData';
export default class Header extends Component {
  render() {
    return (

      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#portfolio">My Work</a></li>
          </ul>
        </nav> 
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {resumeData.firstName}</h1>
            <h3>I'm a <span>programmer</span> and <span>designer</span> pursuing a career in software development and game design. I have experience with programming, graphic design, and 3D modeling, and I'm especially passionate about games and everything related to them! </h3>
            <ul className="social">
              <li><a href={resumeData.linkedin}><i className="fa fa-linkedin" /></a></li>
              <li><a href={resumeData.github}><i className="fa fa-github" /></a></li>
              <li><a href={resumeData.mailto}><i className="fa fa-envelope" /></a></li>
              <li><a href={resumeData.twitter}><i className="fa fa-twitter" /></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
    );
  }
}