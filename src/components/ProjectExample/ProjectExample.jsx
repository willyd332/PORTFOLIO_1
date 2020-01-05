import React from 'react';

// Components

function ProjectExample(props) {


  const postion             = props.postion;
  const imageUrl            = props.imageUrl;
  const projectLink         = props.projectLink;
  const projectDescription  = props.projectDescription;
  const projectName         = props.projectName;


  return (

    <div
      className="projectExampleBox"
      style={postion}
    >
      <img src={imageUrl} alt={projectName} className="projectExampleImage"/>
      <a
        href={projectLink}
        target="_blank"
        className="overlay"
      >
        <div className="projectExampleDescription">{projectDescription}</div>
      </a>
    </div>


  );
}

export default ProjectExample;
