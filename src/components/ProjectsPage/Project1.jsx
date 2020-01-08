import React from 'react';

// Components
import ProjectExample from '../ProjectExample/ProjectExample.jsx';

// Text
import text from '../../text/text.js'

// Images
import dance from '../../images/dance.png'
import emphasis from '../../images/EmphasisDBLogo.png'

function Project1(props) {

  return (
    <div
      id="Project1"
      className="projectBox"
      style={props.style}
    >

      <ProjectExample
        postion = {{top: "13vh", left: "20vw"}}
        imageUrl = {dance}
        projectLink = "https://willyd332.github.io/Dance-Dance/"
        projectDescription = "An HTML canvas music game"
        projectName = "Dance Dance"
      />


      <ProjectExample
        postion = {{top: "55vh", left: "50vw"}}
        imageUrl = {emphasis}
        projectLink = "http://emphasisdb.herokuapp.com/"
        projectDescription = "Online Database for the Emphasis AI NLP model"
        projectName = "Emphasis DB"
      />

    </div>
  );
}

export default Project1;
