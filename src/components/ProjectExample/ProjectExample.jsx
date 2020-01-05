import React from 'react';

// Components

function ProjectExample(props) {


  const postion             = props.postion;
  const imageUrl            = props.imageUrl;
  const projectLink         = props.projectLink;
  const projectDescription = props.projectDescription;
  const projectName         = props.projectName;


  return (
    <div
      className="projectExampleBox"
      style={postion}
    >
      <a
        href={projectLink}
        target="_blank"
      >
        <img
          className="projectExampleImage"
          src={imageUrl}
          alt={projectName}
        >
        </img>
      </a>

      <p
        className="projectExampleDescription"
      >
        {projectDescription}
      </p>


    </div>
  );
}

export default ProjectExample;
