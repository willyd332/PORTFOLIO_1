import React from 'react';

// Components

function ProjectsView(props) {

  return (
    <div
      id="projectsView"
      className="mainSection"
      style={props.style}
    >

      <div
        id="projNavDirections"
      >
        {/* <h1
          className="projNavText"
          >navigate down with arrowkeys...</h1>
          <h4
          className="subProjNavText"
        >...or click near the edge</h4> */}
        <img
          className="downArrowImgLeft"
          src="https://image.flaticon.com/icons/png/512/60/60965.png"
        />
        <img
          className="downArrowImgRight"
          src="https://image.flaticon.com/icons/png/512/60/60965.png"
        />

      </div>
    </div>
  );
}

export default ProjectsView;
