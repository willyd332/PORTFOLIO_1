import React from 'react';

// Components
import ProjectExample from '../ProjectExample/ProjectExample.jsx';

// Images
import tbd from '../../images/TBD.jpg'

function Project5(props) {

  return (
    <div
      id="Project5"
      className="projectBox"
      style={props.style}
    >

      <ProjectExample
        postion = {{top: "7vh", left: "58vw"}}
        imageUrl = {tbd}
        projectLink = ""
        projectDescription = "To Be Determined..."
        projectName = "TBD"
      />

      <ProjectExample
        postion = {{top: "15vh", left: "30vw"}}
        imageUrl = {tbd}
        projectLink = ""
        projectDescription = "To Be Determined..."
        projectName = "TBD"
      />

      <ProjectExample
        postion = {{top: "55vh", left: "10vw"}}
        imageUrl = {tbd}
        projectLink = ""
        projectDescription = "To Be Determined..."
        projectName = "TBD"
      />


    </div>
  );
}

export default Project5;
