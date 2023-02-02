import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import getPDF from '../controllers/pdfController';
import downloadFile from './pdfDownloader';

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
    "3 years experience. Passionate about working with UX/UI, API, and databases.",
    "Built multiple projects including basic game applications, applications that interact with a server, manage data and show UX/UI skills. See Portfolio",
     "State Fair Community College (in progress) - Team Treehouse - CodeAcademy - freeCodeCamp - Udemy",
     "JavaScript(ES2015)/HTML5/CSS3(SASS, Keyframes, Bootstrap) - UX/UI Design - Advanced Problem Solving - Animation - React - Webpack,, Python, SQL, Git, Node.js, JQuery, Experience in Computer Repair",
     "Click a link to the left"
  ];

  const [width, setWidth] = useState(window.innerWidth);
  const [visible, setVisible] = useState(4);

  window.addEventListener("resize", setWidth);

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

  useEffect(() => {
    console.log({visible})
    console.log({width})
    console.log(infoArr[visible]);
    let resumeInfoBox = document.getElementById('resumeInfoBox');
    let text = document.createTextNode(infoArr[visible]);
    resumeInfoBox.appendChild(text);
    if (resumeInfoBox.childNodes.length === 2 ) {
        resumeInfoBox.removeChild(resumeInfoBox.childNodes[0]);
    } else {
      console.log('nothing to remove...');
    }
    window.addEventListener("resize", setWidth(window.innerWidth))
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
  
  
  
  
  const arrowPos = {
    position: 'relative',
    left: '80px',
    color: '#424548',
    fontSize: '2em',
    margin: '0',
    zIndex: '5'
  }
  
  const resumeStyle = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: '73%',
    border: 'solid #424548 1px',
    position: 'relative',
    top: '10%',
    width: '75%',
    marginLeft: '5%',
  }
  
  const resumeInfoBox = {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
    width: '68%',
    left: '30%',
    lineHeight: '30px',
    border: 'solid #424548 1px',
    borderRight: 'none',
    position: 'absolute',
    color: '#91690d',
    fontFamily: 'Open Sans Condensed',
    fontSize: '1.3rem'
  }
  
  const resOptionsStyle = {
    height: '90%',
    width: '30%',
    border: 'solid #424548 1px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: '#424548',
    lineHeight: '1.5em',
    fontFamily: 'Open Sans Condensed',
    letterSpacing: '2px',
    color: '#91690d',
    fontSize: '1.3rem',
    zIndex: '100'
  
  }
  
  const pdfDownloadBoxStyle = {
    display: 'flex',
    flex: '2',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '17%',
    width: '100%',
    verticalAlign: 'middle'
  }
  
  const itemStyle = {
  }    

  // render() {
    return (
      <div id='resumeBox' style={resumeStyle}>
        <p id='resumeInfoBox' style={resumeInfoBox}>Choose an Option on the Left</p>
        <div id="resOptionsBox" style={resOptionsStyle}>
          <p id="profileLink" onMouseOver={hoverPointer} onClick={() => setVisible(0)}>Profile</p>
          <p id="skillsLink" onMouseOver={hoverPointer}  onClick={() => setVisible(1)}>Skills</p>
          <p id="experienceLink" onMouseOver={hoverPointer}  onClick={() => setVisible(2)}>Experience</p>
          <p id="educationLink" onMouseOver={hoverPointer}  onClick={() => setVisible(3)}>Education</p>
        </div>
        <div id="pdfDownloadBox" style={pdfDownloadBoxStyle}>
          <p>Resume PDF:</p>
          <p 
            onClick={() => getPDF()}>View
          </p>
          <a id="downloadLink"
            onClick={() => downloadFile()}>Download
          </a>
        </div>
      </div>
    )
  }
//}







const root = ReactDOM.createRoot(
  document.getElementById('resume-container')
);

root.render(<Resume/>);
