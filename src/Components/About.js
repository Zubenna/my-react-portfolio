import React from "react";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var bio = data.bio;
    var email = data.email;
    var resumeDownload = data.resumedownload;
  }

  return (
    <section id="about">
      <div className="row">
          <h2>About Me</h2>
          <p id="bio">{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumeDownload} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;
