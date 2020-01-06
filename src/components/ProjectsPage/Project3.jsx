import React from 'react';

// Components
import ProjectExample from '../ProjectExample/ProjectExample.jsx';

// images
import vigenere from '../../images/vigenere.png'
import tbd from '../../images/TBD.jpg'

function Project3(props) {

  return (
    <div
      id="Project3"
      className="projectBox"
      style={props.style}
    >


      <ProjectExample
        postion = {{top: "13vh", left: "20vw"}}
        imageUrl = {vigenere}
        projectLink = "https://github.com/willyd332/Vigenere_Key_Finder_Java"
        projectDescription = "A Java package that can find the decryption key for a Vigenere Cipher"
        projectName = "Vigenere Decryptor"
      />


      <ProjectExample
        postion = {{top: "55vh", left: "45vw"}}
        imageUrl = {tbd}
        projectLink = ""
        projectDescription = "To Be Determined..."
        projectName = "TBD"
      />


    </div>
  );
}

export default Project3;
