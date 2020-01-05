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
          If you want to improve, be content to be thought foolish and stupid with regard to external things. <br />
          ― Epictetus
        </div>
      </div>


    </div>
  );
}

export default AboutMe;
