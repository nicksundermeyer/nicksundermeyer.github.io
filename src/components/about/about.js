import React, { Component } from 'react';
import resumeData from '../../resumeData';
export default class About extends Component {
  render() {
    return (

      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>Studying Computer Science and Game Development at the University of Denver, pursuing a career as a game designer and software engineer. I'm a hard worker who thrives when working in a group, and my excellent communication skills come in handy in collaborative situations. I can talk your ear off about anything I'm interested in, from technology to books and astronomy, and I'm especially passionate about games and everything related to them. I have experience with programming, graphic design, 3D modeling, and game design.</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.firstName} {resumeData.lastName}</span><br />
                  <span>{resumeData.address1}<br />
                    {resumeData.address2}
                    </span><br />
                  <span>{resumeData.phone}</span><br />
                  <span>{resumeData.email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="https://docs.google.com/document/d/1-ALimyur-7Yczu9fWQcR-0xl1YNq4-JJPWRh6OWTp48/edit?usp=sharing" className="button">View Resume</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}