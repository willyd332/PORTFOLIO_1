import React from 'react';

// Components
import ProjectExample from '../ProjectExample/ProjectExample.jsx';


// Images
import flow from '../../images/flow.png'
import holdem from '../../images/holdemlogo.jpg'

function Project2(props) {

  return (
    <div
      id="Project2"
      className="projectBox"
      style={props.style}
    >


      <ProjectExample
        postion = {{top: "10vh", left: "65vw"}}
        imageUrl = {flow}
        projectLink = "https://apps.apple.com/us/app/flow-connect-lite/id1471919193"
        projectDescription = "iOS/React app that helps you manage personal connections"
        projectName = "Flow Connect"
      />


      <ProjectExample
        postion = {{top: "50vh", left: "40vw"}}
        imageUrl = {holdem}
        projectLink = "https://holdem-io.herokuapp.com/"
        projectDescription = "Online mulitplayer poker built with React.js and Socket.io"
        projectName = "Holdem.io"
      />


    </div>
  );
}

export default Project2;
