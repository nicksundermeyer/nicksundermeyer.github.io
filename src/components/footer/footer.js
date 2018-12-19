import React, { Component } from 'react';
import resumeData from '../../resumeData';
export default class Footer extends Component {
  render() {
    return (

      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href={resumeData.linkedin}><i className="fa fa-linkedin" /></a></li>
              <li><a href={resumeData.github}><i className="fa fa-github" /></a></li>
              <li><a href={resumeData.mailto}><i className="fa fa-envelope" /></a></li>
              <li><a href={resumeData.twitter}><i className="fa fa-twitter" /></a></li>
            </ul>
            <ul className="copyright">
              <li>Original design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
    );
  }
}