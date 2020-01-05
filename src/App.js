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

const left = {left: 0};
const second = {left: width};
const third = {left: width * 2};
const fourth = {left: width * 3};
const vertFirst = {top: height}
const vertSecond = {top: height * 2}
const vertThird = {top: height * 3}
const vertFourth = {top: height * 4}
const vertFifth = {top: height * 5}

const initialStyles = [
  left,
  second,
  third,
  fourth,
  {left: 0 - width}
]

const initialVerticalStyles = [
  vertFirst,
  vertSecond,
  vertThird,
  vertFourth,
  vertFifth,
]


function App() {

  const reload = () => {
    window.location.reload(false);
  }

  window.addEventListener('resize', reload);

  let mainDiv;

  React.useEffect(()=>{
    mainDiv.focus();
  }, []);

  const [styles,setStyles] = React.useState(initialStyles)
  const [vertStyles,setVertStyles] = React.useState(initialVerticalStyles)

  const [pageCounter,setPageCounter] = React.useState(0);

  const [animating,setAnimating] = React.useState(false);

  const [projectsScroll,setProjectsScroll] = React.useState(false);

  const [projectsIndex,setProjectsIndex] = React.useState(null);

  const handleRightKey = () => {

  const divs = document.getElementsByClassName("mainSection");

    let positionOne = styles[0].left;
    let positionTwo = styles[1].left;
    let positionThree = styles[2].left;
    let positionFour = styles[3].left;
    let positionFive = styles[4].left;

    const final = positionOne - width;

    const finalTwo = positionTwo - width;
    const finalThree = positionThree - width;
    const finalFour = positionFour - width;
    const finalFive = positionFive - width;

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
      setStyles([{left: 0 - width},left,second,third,fourth]);
      setPageCounter(1);
    } else if (pageCounter === 1) {
      setStyles([fourth,{left: 0 - width},left,second,third]);
      setPageCounter(2);
    } else if (pageCounter === 2) {
      setStyles([third,fourth,{left: 0 - width},left,second]);
      setPageCounter(3);
    } else if (pageCounter === 3) {
      setStyles([second,third,fourth,{left: 0 - width},left]);
      setPageCounter(4);
    } else if (pageCounter === 4) {
      setStyles([left,second,third,fourth,{left: 0 - width}]);
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

    const final = positionOne + width;

    const finalTwo = positionTwo + width;
    const finalThree = positionThree + width;
    const finalFour = positionFour + width;
    const finalFive = positionFive + width;

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
      setStyles([second,third,fourth,{left: 0 - width},left]);
      setPageCounter(4);
    } else if (pageCounter === 1) {
      setStyles([left,second,third,fourth,{left: 0 - width}]);
      setPageCounter(0);
    } else if (pageCounter === 2) {
      setStyles([{left: 0 - width},left,second,third,fourth]);
      setPageCounter(1);
    } else if (pageCounter === 3) {
      setStyles([fourth,{left: 0 - width},left,second,third]);
      setPageCounter(2);
    } else if (pageCounter === 4) {
      setStyles([third,fourth,{left: 0 - width},left,second]);
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

      const final = -height;

      let topPosition = 0;

      let firstProjectTop = height;
      let secondProjectTop = height * 2;
      let thirdProjectTop = height * 3;
      let fourthProjectTop = height * 4;
      let fifthProjectTop = height * 5;

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
          projectDivs[1].style.top = height + "px";
          projectDivs[2].style.top = height * 2 + "px";
          projectDivs[3].style.top = height * 3 + "px";
          projectDivs[4].style.top = height * 4 + "px";
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

      let firstProjectTop = -(height * projectsIndex);
      let secondProjectTop = firstProjectTop + height;
      let thirdProjectTop = secondProjectTop + height;
      let fourthProjectTop = thirdProjectTop + height;
      let fifthProjectTop = fourthProjectTop + height;

      const projectFinal = firstProjectTop - height;

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
          projectDivs[1].style.top = projectFinal + height + "px";
          projectDivs[2].style.top = projectFinal + (height * 2) + "px";
          projectDivs[3].style.top = projectFinal + (height * 3) + "px";
          projectDivs[4].style.top = projectFinal + (height * 4) + "px";

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

      let topPosition = -height;
      let firstProjectTop = 0
      let secondProjectTop = height;
      let thirdProjectTop = height * 2;
      let fourthProjectTop = height * 3;
      let fifthProjectTop = height * 4;

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
          projectDivs[0].style.top = height + "px";
          projectDivs[1].style.top = height * 2 + "px";
          projectDivs[2].style.top = height * 3 + "px";
          projectDivs[3].style.top = height * 4 + "px";
          projectDivs[4].style.top = height * 5 + "px";
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

      let firstProjectTop = -(height * projectsIndex);
      let secondProjectTop = firstProjectTop + height;
      let thirdProjectTop = secondProjectTop + height;
      let fourthProjectTop = thirdProjectTop + height;
      let fifthProjectTop = fourthProjectTop + height;

      const projectFinal = firstProjectTop + height;

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
          projectDivs[1].style.top = projectFinal + height + "px";
          projectDivs[2].style.top = projectFinal + (height * 2) + "px";
          projectDivs[3].style.top = projectFinal + (height * 3) + "px";
          projectDivs[4].style.top = projectFinal + (height * 4) + "px";

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
