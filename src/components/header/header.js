import React, { Component } from "react";
import resumeData from "../../resumeData";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <header id="home">
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {resumeData.firstName}</h1>
            <h3>
              I'm a versatile software developer with a design-oriented mind who
              loves working on creative interactive experiences that challenge
              me in multiple areas.
            </h3>
            <ul className="social">
              <li>
                <a href={resumeData.linkedin}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href={resumeData.github}>
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a href={resumeData.itchio}>
                  <i className="fab fa-itch-io"></i>
                </a>
              </li>
              <li>
                <a href={resumeData.mailto}>
                  <i class="fas fa-envelope"></i>
                </a>
              </li>
              <li>
                <a href={resumeData.twitter}>
                  <i className="fab fa-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    );
  }
}
