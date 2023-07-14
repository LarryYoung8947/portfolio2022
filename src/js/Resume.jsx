import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import getPDF from '../controllers/pdfController';
import downloadFile from './pdfDownloader';
import styled from 'styled-components'
//CURRENTLY CONVERTING TO FUNCTION COMPONENT

//CLASS COMPONENT SYNTAX -------- LEGACY MODEL

//export default class Resume extends React.Component {
  /* constructor(props){
    super(props)
    this.state = {
      category: ['Profile', 'Skills', 'Exp', 'Edu'],
      resumeShift: this.getClicked.bind(this),
      visible: null,
      fadeInInfo: this.getClicked.bind(this),
      displayPDF: false,
      arrowPos: 0,
      downloadLabel: 'Download'
    }
  } */

export const Resume = () => {

  /* componentDidMount() {
    //this.displayAnimation(); displays animation in textbox field until link is clicked
  }

  componentDidUpdate() {
    //stopAnimation();
    this.fadeInInfo();
  } */

  const infoArr = [
    
    "Built multiple projects including basic game applications, applications that interact with a server, manage data and show UX/UI skills. See Portfolio",
    "JavaScript(ES2015)/HTML5/CSS3(SASS, Keyframes, Bootstrap) - UX/UI Design - Advanced Problem Solving - Animation - React - Webpack,, Python, SQL, Git, Node.js, JQuery, Experience in Computer Repair",
    "3 years experience. Passionate about working with UX/UI, API, and databases.", 
    "State Fair Community College (in progress) - Team Treehouse - CodeAcademy - freeCodeCamp - Udemy",     
     "Click an option to the left",
     "Click an option above"
  ];

  const navBar = document.getElementById('navBar')
  const vertNav = document.getElementById('vertNav')

  const [width, setWidth] = useState(window.innerWidth);
  const [visible, setVisible] = useState(window.innerWidth <= 600 ? 5 : 4);
  const [navMenuType, setNavMenuType] = useState(window.innerWidth <= 600 ? 'navBar' : 'verNav')

  

  //CURRENTLY TRACKING WINDOW WIDTH WITH HOOKS IN CONSOLE LOG
  //DONT FORGET TO WRITE RESIZING OBJECTS WITH TERNARY EXPRESSIONS --- EXAMPLE BELOW

  /* const showNav= {
    display: showTopNavMenu ? 'flex' : 'none'
  }
  const showMenuIcon = {
    display: showTopNavMenu ? 'none' : 'flex',
  }
  return (
     <>
       <div id="nav_container" style={showNav}>
         <nav id="navigation">{navMenuItems}</nav>
       </div>
       <span className="menu-icon" style={showMenuIcon}/>
     </>
  ) */

  let text;

  useEffect(() => {
    console.log({visible})
    console.log({width})
    console.log(infoArr[visible]);
    //insert resInfo function
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      setVisible(width <= 600 ? 5 : 4 )
      setNavMenuType(width <= 600 ? vertNav.style.opacity = 0 : vertNav.style.opacity = 1) 
    })

  }) 


  const displayPDF = () => {
    alert('Here is the PDF');
  };

  const hoverPointer = () => {
    event.target.style.cursor = 'pointer';
  
    
  }
  
  
  const imgArr = [];
  let clickedLink;
  let currentDiv;
  let activeResID;

  const ResumeBox = styled.div`
    display: flex;
    height: 100%;
    position: absolute;
    overflow-x: hidden;
    left: 5%;
    width: 70%;
    border: 1px solid #424548;
    align-items: center;
    justify-content: space-around;
    z-index: 1000;
    @media (max-width: 600px) {
      border-top: 1px solid #424548;
      height: 450px;
      width: 90%;
      top: 20px;
      left: 8%;
    }
  `

  const ResumeInfoBox = styled.h1`
    display: flex;
    position: relative;
    left: 10%;
    width: 60%;
    justify-content: center;
    font-size: 1.25em;
    font-family: "Raleway";
    line-height: 30px;
    font-weight: "bold";
    color: #939597;
    @media (max-width: 600px) {
      display: block;
      height: 284px;
      width: 90%;
      top: 50px;
      left: 2%;
      text-align: center;
    }
  `

  const PdfDownloadBox = styled.div`
    display: flex;
    position: absolute;
    height: 50px;
    width: 100%;
    border: 1px solid #939597;
    font-family: 'Raleway';
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 1.3rem;
    font-weight: bold;
    color: #939597;
    top: 90%;
    @media (max-width: 600px) {
      display: flex;
      height: 50px;
      align-items: center;
      width: 100%;
      text-align: center;
      top: 88%;
    }
  `
  const ResumeOptionsBox = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    align-items: center;
    height: 317px;
    left: 7%;
    font-size: 1.5em;
    font-family: "Raleway";
    font-weight: bold;
    top: 77px;
    color: #939597;
  @media (max-width: 600px) {
    display: flex;
    position: absolute;
    flex-direction: row;
    justify-content: space-around;
    color: #939597;
    border: 1px solid #424548;
    height: 30px;
    width: 100%;
    left: 0;
    top: 0;
    font-size: 1em;
  }
`

    return (
      <ResumeBox>
        <ResumeInfoBox>{infoArr[visible]}</ResumeInfoBox>
        <ResumeOptionsBox>
          <p id="profileLink" onMouseOver={hoverPointer} onClick={() => setVisible(0)}>Profile</p>
          <p id="skillsLink" onMouseOver={hoverPointer}  onClick={() => setVisible(1)}>Skills</p>
          <p id="experienceLink" onMouseOver={hoverPointer}  onClick={() => setVisible(2)}>Experience</p>
          <p id="educationLink" onMouseOver={hoverPointer}  onClick={() => setVisible(3)}>Education</p>
        </ResumeOptionsBox>
        <PdfDownloadBox>
          <p>Resume PDF:</p>
          <p 
            onClick={() => getPDF()}>View
          </p>
          <a id="downloadLink"
            onClick={() => downloadFile()}>Download
          </a>
        </PdfDownloadBox>
      </ResumeBox>
    )
  }
//}







const root = ReactDOM.createRoot(
  document.getElementById('resume-container')
);

root.render(<Resume/>);
