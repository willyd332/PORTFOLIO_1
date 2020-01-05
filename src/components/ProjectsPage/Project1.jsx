import React from 'react';

// Components
import ProjectExample from '../ProjectExample/ProjectExample.jsx';

// Text
import text from '../../text/text.js'

function Project1(props) {

  return (
    <div
      id="Project1"
      className="projectBox"
      style={props.style}
    >

      <ProjectExample
        projectLink="https://google.com"
        projectName="TEST"
        projectDescription={text.exampleProject}
        imageUrl="http://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"
        postion={{"top": "10vh"}}
      />


    </div>
  );
}

export default Project1;
