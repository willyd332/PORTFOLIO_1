import React from 'react';

// Components
import ProjectExample from '../ProjectExample/ProjectExample.jsx';

// Text
import text from '../../text/text.js'
import holdem from '../../images/holdemlogo.jpg'

function Project1(props) {

  return (
    <div
      id="Project1"
      className="projectBox"
      style={props.style}
    >

      <ProjectExample
        postion = {{top: "10vh", left: "10vw"}}
        imageUrl = {holdem}
        projectLink = "https://holdem-io.herokuapp.com/"
        projectDescription = "Online mulitplayer poker built with React.js and Socket.io"
        projectName = "Holdem.io"
      />

      
    </div>
  );
}

export default Project1;
