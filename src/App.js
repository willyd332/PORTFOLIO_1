import React from 'react';
import './App.css';

// Components
import GreetingView from './components/GreetingView/GreetingView.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import SkillsView from './components/SkillsView/SkillsView.jsx';
import ProjectsView from './components/ProjectsView/ProjectsView.jsx';
import ContactMe from './components/ContactMe/ContactMe.jsx';
import Project1 from './components/ProjectsPage/Project1.jsx'
import Project2 from './components/ProjectsPage/Project2.jsx'
import Project3 from './components/ProjectsPage/Project3.jsx'
import Project4 from './components/ProjectsPage/Project4.jsx'
import Project5 from './components/ProjectsPage/Project5.jsx'

// Variables
var width = Math.max(window.innerWidth);
var height = Math.max(window.innerHeight);

console.log(width + " " + height);

const getDimension = (dimension) => {
  switch (dimension) {
  case "left":
    return({left: 0});
  case "second":
    return({left: window.innerWidth});
  case "third":
    return({left: window.innerWidth * 2});
  case "fourth":
    return({left: window.innerWidth * 3});
  case "vertFirst":
    return({top: window.innerHeight});
  case "vertSecond":
    return({top: window.innerHeight * 2});
  case "vertThird":
    return({top: window.innerHeight * 3});
  case "vertFourth":
    return({top: window.innerHeight * 4});
  case "vertFifth":
    return({top: window.innerHeight * 5});
}
}


const initialStyles = [
  getDimension('left'),
  getDimension('second'),
  getDimension('third'),
  getDimension('fourth'),
  {left: 0 - window.innerWidth}
]

const initialVerticalStyles = [
  getDimension('vertFirst'),
  getDimension('vertSecond'),
  getDimension('vertThird'),
  getDimension('vertFourth'),
  getDimension('vertFifth'),
]



function App() {

  let mainDiv;

// Focuses on the main div so arrowkey event listeners are activated

  const [styles,setStyles] = React.useState(initialStyles)
  const [vertStyles,setVertStyles] = React.useState(initialVerticalStyles)

  const [pageCounter,setPageCounter] = React.useState(0);

  const [animating,setAnimating] = React.useState(false);

  const [projectsScroll,setProjectsScroll] = React.useState(false);

  const [projectsIndex,setProjectsIndex] = React.useState(null);

  const reset = () => {
    // window.location.reload(false);

    console.log("het")

    if (pageCounter === 1){
      setStyles([{left: 0 - window.innerWidth},getDimension('left'),getDimension('second'),getDimension('third'),getDimension('fourth')]);
      setPageCounter(1);
    } else if (pageCounter === 2) {
      setStyles([getDimension('fourth'),{left: 0 - window.innerWidth},getDimension('left'),getDimension('second'),getDimension('third')]);
      setPageCounter(2);
    } else if (pageCounter === 3) {
      setStyles([getDimension('third'),getDimension('fourth'),{left: 0 - window.innerWidth},getDimension('left'),getDimension('second')]);
      setPageCounter(3);
    } else if (pageCounter === 4) {
      setStyles([getDimension('second'),getDimension('third'),getDimension('fourth'),{left: 0 - window.innerWidth},getDimension('left')]);
      setPageCounter(4);
    } else if (pageCounter === 0) {
      setStyles([getDimension('left'),getDimension('second'),getDimension('third'),getDimension('fourth'),{left: 0 - window.innerWidth}]);
      setPageCounter(0);
    }

    if(!projectsScroll){
      setVertStyles([
        getDimension('vertFirst'),
        getDimension('vertSecond'),
        getDimension('vertThird'),
        getDimension('vertFourth'),
        getDimension('vertFifth'),
      ]);
    } else {

      let firstProjectTop = -(window.innerHeight * projectsIndex);
      let secondProjectTop = firstProjectTop + window.innerHeight;
      let thirdProjectTop = secondProjectTop + window.innerHeight;
      let fourthProjectTop = thirdProjectTop + window.innerHeight;
      let fifthProjectTop = fourthProjectTop + window.innerHeight;

      setVertStyles([
        { top: firstProjectTop },
        { top: secondProjectTop },
        { top: thirdProjectTop },
        { top: fourthProjectTop },
        { top: fifthProjectTop },
      ]);

    }

  }

  React.useEffect(()=>{
    mainDiv.focus();
  }, []);

  React.useEffect(()=>{
    window.addEventListener('resize',reset,true);
    return () => {
      window.removeEventListener('resize',reset,true);
    }
  });


  const handleRightKey = () => {

    // This grabs each "mainSection" and puts them in array
    const divs = document.getElementsByClassName("mainSection");

    let positionOne = styles[0].left;
    let positionTwo = styles[1].left;
    let positionThree = styles[2].left;
    let positionFour = styles[3].left;
    let positionFive = styles[4].left;

    const final = positionOne - window.innerWidth;

    const finalTwo = positionTwo - window.innerWidth;
    const finalThree = positionThree - window.innerWidth;
    const finalFour = positionFour - window.innerWidth;
    const finalFive = positionFive - window.innerWidth;

    const animateSlide = () => {

      positionOne -= 20;
      positionTwo -= 20;
      positionThree -= 20;
      positionFour -= 20;
      positionFive -= 20;

      divs[0].style.left = positionOne + 'px';
      divs[1].style.left = positionTwo + 'px';
      divs[2].style.left = positionThree + 'px';
      divs[3].style.left = positionFour + 'px';
      divs[4].style.left = positionFive + 'px';



      if (positionOne > final){
        requestAnimationFrame(animateSlide);
      }
      if (positionOne <= final){
        divs[0].style.left = final + "px";
        divs[1].style.left = finalTwo + "px";
        divs[2].style.left = finalThree + "px";
        divs[3].style.left = finalFour + "px";
        divs[4].style.left = finalFive + "px";
        setAnimating(false);
      }
    }

    requestAnimationFrame(animateSlide)

    if (pageCounter === 2){
      const arrowDown = document.getElementById("navDown");
      arrowDown.style.display = "block";
    }

    if (pageCounter === 1 || pageCounter === 3){
      const arrowDown = document.getElementById("navDown");
      arrowDown.style.display = "none";
    }

    if (pageCounter === 0){
      setStyles([{left: 0 - window.innerWidth},getDimension('left'),getDimension('second'),getDimension('third'),getDimension('fourth')]);
      setPageCounter(1);
    } else if (pageCounter === 1) {
      setStyles([getDimension('fourth'),{left: 0 - window.innerWidth},getDimension('left'),getDimension('second'),getDimension('third')]);
      setPageCounter(2);
    } else if (pageCounter === 2) {
      setStyles([getDimension('third'),getDimension('fourth'),{left: 0 - window.innerWidth},getDimension('left'),getDimension('second')]);
      setPageCounter(3);
    } else if (pageCounter === 3) {
      setStyles([getDimension('second'),getDimension('third'),getDimension('fourth'),{left: 0 - window.innerWidth},getDimension('left')]);
      setPageCounter(4);
    } else if (pageCounter === 4) {
      setStyles([getDimension('left'),getDimension('second'),getDimension('third'),getDimension('fourth'),{left: 0 - window.innerWidth}]);
      setPageCounter(0);
    }
  }

  const handleLeftKey = () => {

  const divs = document.getElementsByClassName("mainSection");

    let positionOne = styles[0].left;
    let positionTwo = styles[1].left;
    let positionThree = styles[2].left;
    let positionFour = styles[3].left;
    let positionFive = styles[4].left;

    const final = positionOne + window.innerWidth;

    const finalTwo = positionTwo + window.innerWidth;
    const finalThree = positionThree + window.innerWidth;
    const finalFour = positionFour + window.innerWidth;
    const finalFive = positionFive + window.innerWidth;

    const animateSlide = () => {

      positionOne += 20;
      positionTwo += 20;
      positionThree += 20;
      positionFour += 20;
      positionFive += 20;

      divs[0].style.left = positionOne + 'px';
      divs[1].style.left = positionTwo + 'px';
      divs[2].style.left = positionThree + 'px';
      divs[3].style.left = positionFour + 'px';
      divs[4].style.left = positionFive + 'px';

      if (positionOne < final){
        requestAnimationFrame(animateSlide);
      }
      if (positionOne >= final){
        divs[0].style.left = final + "px";
        divs[1].style.left = finalTwo + "px";
        divs[2].style.left = finalThree + "px";
        divs[3].style.left = finalFour + "px";
        divs[4].style.left = finalFive + "px";
        setAnimating(false);
      }
    }

    requestAnimationFrame(animateSlide)

    if (pageCounter === 4){
      const arrowDown = document.getElementById("navDown");
      arrowDown.style.display = "block";
    }

    if (pageCounter === 0 || pageCounter === 3){
      const arrowDown = document.getElementById("navDown");
      arrowDown.style.display = "none";
    }



    if (pageCounter === 0){
      setStyles([getDimension('second'),getDimension('third'),getDimension('fourth'),{left: 0 - window.innerWidth},getDimension('left')]);
      setPageCounter(4);
    } else if (pageCounter === 1) {
      setStyles([getDimension('left'),getDimension('second'),getDimension('third'),getDimension('fourth'),{left: 0 - window.innerWidth}]);
      setPageCounter(0);
    } else if (pageCounter === 2) {
      setStyles([{left: 0 - window.innerWidth},getDimension('left'),getDimension('second'),getDimension('third'),getDimension('fourth')]);
      setPageCounter(1);
    } else if (pageCounter === 3) {
      setStyles([getDimension('fourth'),{left: 0 - window.innerWidth},getDimension('left'),getDimension('second'),getDimension('third')]);
      setPageCounter(2);
    } else if (pageCounter === 4) {
      setStyles([getDimension('third'),getDimension('fourth'),{left: 0 - window.innerWidth},getDimension('left'),getDimension('second')]);
      setPageCounter(3);
    }
  }

  const handleDownKey = () => {


    if (projectsIndex === 4){

      setAnimating(false);

    } else if (!projectsScroll){
      setProjectsIndex(0);
      setProjectsScroll(true)
      const divs = document.getElementsByClassName("mainSection");
      const projectDivs = document.getElementsByClassName("projectBox");

      const final = -window.innerHeight;

      let topPosition = 0;

      let firstProjectTop = window.innerHeight;
      let secondProjectTop = window.innerHeight * 2;
      let thirdProjectTop = window.innerHeight * 3;
      let fourthProjectTop = window.innerHeight * 4;
      let fifthProjectTop = window.innerHeight * 5;

      const animateAllSlideUp = () => {

        topPosition -= 20;
        firstProjectTop -= 20;
        secondProjectTop -= 20;
        thirdProjectTop -= 20;
        fourthProjectTop -= 20;
        fifthProjectTop -= 20;

        divs[0].style.top = topPosition + 'px';
        divs[1].style.top = topPosition + 'px';
        divs[2].style.top = topPosition + 'px';
        divs[3].style.top = topPosition + 'px';
        divs[4].style.top = topPosition + 'px';
        projectDivs[0].style.top = firstProjectTop + "px";
        projectDivs[1].style.top = secondProjectTop + "px";
        projectDivs[2].style.top = thirdProjectTop + "px";
        projectDivs[3].style.top = fourthProjectTop + "px";
        projectDivs[4].style.top = fifthProjectTop + "px";



        if (topPosition > final){
          requestAnimationFrame(animateAllSlideUp);
        }
        if (topPosition <= final){
          setAnimating(false);
          divs[0].style.top = final + "px";
          divs[1].style.top = final + "px";
          divs[2].style.top = final + "px";
          divs[3].style.top = final + "px";
          divs[4].style.top = final + "px";
          projectDivs[0].style.top = 0 + "px";
          projectDivs[1].style.top = window.innerHeight + "px";
          projectDivs[2].style.top = window.innerHeight * 2 + "px";
          projectDivs[3].style.top = window.innerHeight * 3 + "px";
          projectDivs[4].style.top = window.innerHeight * 4 + "px";
        }
      }

      requestAnimationFrame(animateAllSlideUp);


      const arrowUp = document.getElementById("navUp");
      arrowUp.style.display = "block";
      const arrowDown = document.getElementById("navDown");
      arrowDown.style.width = "100vw";
      arrowDown.style.left = "0px";
      const arrowLeft = document.getElementById("navLeft");
      arrowLeft.style.display = "none";
      const arrowRight = document.getElementById("navRight");
      arrowRight.style.display = "none";


    } else if (projectsScroll) {

      const projectDivs = document.getElementsByClassName("projectBox");

      let firstProjectTop = -(window.innerHeight * projectsIndex);
      let secondProjectTop = firstProjectTop + window.innerHeight;
      let thirdProjectTop = secondProjectTop + window.innerHeight;
      let fourthProjectTop = thirdProjectTop + window.innerHeight;
      let fifthProjectTop = fourthProjectTop + window.innerHeight;

      const projectFinal = firstProjectTop - window.innerHeight;

      const animateProjectsAllSlideUp = () => {

        firstProjectTop -= 20;
        secondProjectTop -= 20;
        thirdProjectTop -= 20;
        fourthProjectTop -= 20;
        fifthProjectTop -= 20;

        projectDivs[0].style.top = firstProjectTop + "px";
        projectDivs[1].style.top = secondProjectTop + "px";
        projectDivs[2].style.top = thirdProjectTop + "px";
        projectDivs[3].style.top = fourthProjectTop + "px";
        projectDivs[4].style.top = fifthProjectTop + "px";



        if (firstProjectTop > projectFinal){
          requestAnimationFrame(animateProjectsAllSlideUp);
        }
        if (firstProjectTop <= projectFinal){
          setAnimating(false);
          setProjectsIndex(projectsIndex + 1);
          projectDivs[0].style.top = projectFinal + "px";
          projectDivs[1].style.top = projectFinal + window.innerHeight + "px";
          projectDivs[2].style.top = projectFinal + (window.innerHeight * 2) + "px";
          projectDivs[3].style.top = projectFinal + (window.innerHeight * 3) + "px";
          projectDivs[4].style.top = projectFinal + (window.innerHeight * 4) + "px";

        }
      }

      requestAnimationFrame(animateProjectsAllSlideUp);

    }


  }

  const handleUpKey = () => {

    if (projectsIndex === null){
      setAnimating(false);
    } else if (projectsScroll && projectsIndex === 0){
      setProjectsIndex(null);
      setProjectsScroll(false)

      const divs = document.getElementsByClassName("mainSection");
      const projectDivs = document.getElementsByClassName("projectBox");

      const final = 0;

      let topPosition = -window.innerHeight;
      let firstProjectTop = 0
      let secondProjectTop = window.innerHeight;
      let thirdProjectTop = window.innerHeight * 2;
      let fourthProjectTop = window.innerHeight * 3;
      let fifthProjectTop = window.innerHeight * 4;

      const animateAllSlideDown = () => {

        topPosition += 20;
        firstProjectTop += 20;
        secondProjectTop += 20;
        thirdProjectTop += 20;
        fourthProjectTop += 20;
        fifthProjectTop += 20;

        divs[0].style.top = topPosition + 'px';
        divs[1].style.top = topPosition + 'px';
        divs[2].style.top = topPosition + 'px';
        divs[3].style.top = topPosition + 'px';
        divs[4].style.top = topPosition + 'px';
        projectDivs[0].style.top = firstProjectTop + "px";
        projectDivs[1].style.top = secondProjectTop + "px";
        projectDivs[2].style.top = thirdProjectTop + "px";
        projectDivs[3].style.top = fourthProjectTop + "px";
        projectDivs[4].style.top = fifthProjectTop + "px";

        if (topPosition < final){
          requestAnimationFrame(animateAllSlideDown);
        }
        if (topPosition >= final){
          setAnimating(false);
          divs[0].style.top = final;
          divs[1].style.top = final;
          divs[2].style.top = final;
          divs[3].style.top = final;
          divs[4].style.top = final;
          projectDivs[0].style.top = window.innerHeight + "px";
          projectDivs[1].style.top = window.innerHeight * 2 + "px";
          projectDivs[2].style.top = window.innerHeight * 3 + "px";
          projectDivs[3].style.top = window.innerHeight * 4 + "px";
          projectDivs[4].style.top = window.innerHeight * 5 + "px";
        }
      }

      requestAnimationFrame(animateAllSlideDown)

      const arrowDown = document.getElementById("navDown");
      arrowDown.style.width = "80vw";
      arrowDown.style.left = "10vw";
      const arrowUp = document.getElementById("navUp");
      arrowUp.style.display = "none";
      const arrowLeft = document.getElementById("navLeft");
      arrowLeft.style.display = "block";
      const arrowRight = document.getElementById("navRight");
      arrowRight.style.display = "block";


    } else if (projectsScroll){

      const projectDivs = document.getElementsByClassName("projectBox");

      let firstProjectTop = -(window.innerHeight * projectsIndex);
      let secondProjectTop = firstProjectTop + window.innerHeight;
      let thirdProjectTop = secondProjectTop + window.innerHeight;
      let fourthProjectTop = thirdProjectTop + window.innerHeight;
      let fifthProjectTop = fourthProjectTop + window.innerHeight;

      const projectFinal = firstProjectTop + window.innerHeight;

      const animateProjectsAllSlideDown = () => {

        firstProjectTop += 20;
        secondProjectTop += 20;
        thirdProjectTop += 20;
        fourthProjectTop += 20;
        fifthProjectTop += 20;

        projectDivs[0].style.top = firstProjectTop + "px";
        projectDivs[1].style.top = secondProjectTop + "px";
        projectDivs[2].style.top = thirdProjectTop + "px";
        projectDivs[3].style.top = fourthProjectTop + "px";
        projectDivs[4].style.top = fifthProjectTop + "px";



        if (firstProjectTop < projectFinal){
          requestAnimationFrame(animateProjectsAllSlideDown);
        }
        if (firstProjectTop >= projectFinal){
          setAnimating(false);
          setProjectsIndex(projectsIndex - 1);
          projectDivs[0].style.top = projectFinal + "px";
          projectDivs[1].style.top = projectFinal + window.innerHeight + "px";
          projectDivs[2].style.top = projectFinal + (window.innerHeight * 2) + "px";
          projectDivs[3].style.top = projectFinal + (window.innerHeight * 3) + "px";
          projectDivs[4].style.top = projectFinal + (window.innerHeight * 4) + "px";

        }
      }

      requestAnimationFrame(animateProjectsAllSlideDown);

    }

  }

  const checkKeyPressed = (evt) => {

    if (pageCounter === 3 && (evt.key === "ArrowDown" || evt.key === "ArrowUp")) {
      if (!animating) {
        setAnimating(true);
      if (evt.key === "ArrowDown") {
          handleDownKey();
      } else if (evt.key === "ArrowUp") {
          handleUpKey();
      }
      }
    }

  if (!projectsScroll && (evt.key === "ArrowLeft" || evt.key === "ArrowRight")) {
    if (!animating) {
      setAnimating(true);
      if (evt.key === "ArrowLeft") {
          handleLeftKey();
      } else if (evt.key === "ArrowRight") {
          handleRightKey();
      }
    }
  }
  }


  return (
    <div
    className="App"
    tabIndex="0"
    onKeyDown={(e)=>{checkKeyPressed(e)}}
    ref={(main) => { mainDiv = main;}}
    >


      <GreetingView style={styles[0]} checkKeyPressed={checkKeyPressed} />
      <AboutMe style={styles[1]} checkKeyPressed={checkKeyPressed} />
      <SkillsView style={styles[2]} checkKeyPressed={checkKeyPressed} />
      <ProjectsView style={styles[3]} checkKeyPressed={checkKeyPressed} />
        <Project1 style={vertStyles[0]} />
        <Project2 style={vertStyles[1]} />
        <Project3 style={vertStyles[2]} />
        <Project4 style={vertStyles[3]} />
        <Project5 style={vertStyles[4]} />
      <ContactMe style={styles[4]} checkKeyPressed={checkKeyPressed} />

      <div
      className="navBtn"
      id="navRight"
      onClick={()=>{
        checkKeyPressed({key: "ArrowRight" });
        }}
      >
      </div>

      <div
      className="navBtn"
      id="navLeft"
      onClick={()=>{
        checkKeyPressed({key: "ArrowLeft" });
        }}
      >
      </div>

      <div
      className="navBtn"
      id="navUp"
      onClick={()=>{
        checkKeyPressed({key: "ArrowUp" });
        }}
      >
      </div>

      <div
      className="navBtn"
      id="navDown"
      onClick={()=>{
        checkKeyPressed({key: "ArrowDown" });
        }}
      >
      </div>

    </div>
  );
}

export default App;
