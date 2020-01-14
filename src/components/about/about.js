import React, { Component } from "react";
import resumeData from "../../resumeData";
import "./about.css";

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={require("./images/profilepic.jpg")}
              alt="profilepic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              I'm a versatile software developer with a design-oriented mind who
              loves working on creative interactive experiences that challenge
              me in multiple areas. I have strong experience across many
              disciplines, including object-oriented programming, the Unity and
              Unreal game engines, UI/UX and game design, and 3D modeling.
            </p>
            <p>
              I am a developer first and foremost because I love to build
              things, but my broad skill-set lets me do so with an eye for
              aesthetic and interaction design, or to design with an
              understanding of the technical challenges involved. Though I am
              especially passionate about games, I get excited by any project
              that involves multiple disciplines across design and development.
              I also love to learn new things, thrive in collaborative teams,
              and have great communication skills from a lifetime passion for
              reading.{" "}
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>
                    {resumeData.firstName} {resumeData.lastName}
                  </span>
                  <br />
                  <span>
                    {resumeData.address1}
                    <br />
                    {resumeData.address2}
                  </span>
                  <br />
                  <span>{resumeData.phone}</span>
                  <br />
                  <span>{resumeData.email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a
                    href="https://docs.google.com/document/d/1-ALimyur-7Yczu9fWQcR-0xl1YNq4-JJPWRh6OWTp48/edit?usp=sharing"
                    className="button"
                  >
                    View Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
