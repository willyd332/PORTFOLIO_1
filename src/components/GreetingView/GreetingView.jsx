import React from 'react';

// Components
import Links from '../Links/Links.jsx';

function GreetingView(props) {

  return (
    <div
      id="greetingView"
      className="mainSection"
      style={props.style}
    >


      <div
        className="mainTitleText"
      >
        WILL DINNEEN
      </div>






      <div
        id="navDirections"
      >
        {/* <h1
          className="mainNavText"
          >navigate with arrowkeys...</h1>
          <h4
          className="subNavText"
        >...or click near the edge</h4> */}
        <img
          className="leftArrowImg"
          src="https://image.flaticon.com/icons/png/512/60/60965.png"
        />
        <img
          className="rightArrowImg"
          src="https://image.flaticon.com/icons/png/512/60/60965.png"
        />
      </div>
    </div>
  );
}

export default GreetingView;
