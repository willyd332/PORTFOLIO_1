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

        </div>
      </div>


    </div>
  );
}

export default AboutMe;
