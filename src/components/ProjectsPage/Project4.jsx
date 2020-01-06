import React from 'react';

// Components
import ProjectExample from '../ProjectExample/ProjectExample.jsx';

// Images
import tbd from '../../images/TBD.jpg'

function Project4(props) {

  return (
    <div
      id="Project4"
      className="projectBox"
      style={props.style}
    >

      <ProjectExample
        postion = {{top: "10vh", left: "58vw"}}
        imageUrl = {tbd}
        projectLink = ""
        projectDescription = "To Be Determined..."
        projectName = "TBD"
      />

      <ProjectExample
        postion = {{top: "55vh", left: "40vw"}}
        imageUrl = {tbd}
        projectLink = ""
        projectDescription = "To Be Determined..."
        projectName = "TBD"
      />

      <ProjectExample
        postion = {{top: "55vh", left: "75vw"}}
        imageUrl = {tbd}
        projectLink = ""
        projectDescription = "To Be Determined..."
        projectName = "TBD"
      />



    </div>
  );
}

export default Project4;
