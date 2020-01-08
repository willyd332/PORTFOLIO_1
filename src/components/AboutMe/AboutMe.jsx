import React from 'react';

// Components

function AboutMe(props) {

  return (
    <div
      id="aboutMe"
      className="mainSection"
      style={props.style}
    >


      <div
        className="aboutMeTextBox"
      >
        <div
          className="aboutMeTitle"
        >
          ABOUT ME
        </div>
        <div
          className="aboutMeParagraph"
        >
          <p>
            Hello! I'm Will, a software engineer based in Denver, CO who enjoys building efficient and useful software. I develop websites and applications with straightforward user interfaces and modern backends.
          </p>
          <p>
            I am currently studying computer science at Emory University in Atlanta, GA, and recently graduated from General Assembly’s Software Engineering Intensive Bootcamp.
          </p>
        </div>
      </div>


    </div>
  );
}

export default AboutMe;
