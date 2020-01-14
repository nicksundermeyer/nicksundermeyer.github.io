import React, { Component } from 'react';
import resumeData from '../../resumeData';
export default class Footer extends Component {
  render() {
    return (

      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href={resumeData.linkedin}><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href={resumeData.github}><i className="fab fa-github" /></a></li>
              <li><a href={resumeData.itchio}><i className="fab fa-itch-io"></i></a></li>
              <li><a href={resumeData.mailto}><i class="fas fa-envelope"></i></a></li>
              <li><a href={resumeData.twitter}><i className="fab fa-twitter" /></a></li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
    );
  }
}