const welcomeSection = document.getElementById('welcomeSection');
const animationBox = document.getElementById('animationBox');
const artBoard = document.getElementById('artBoard');
const resume = document.getElementById('resume');
const resumeContainer = document.getElementById('resume-container');
const projects = document.getElementById('projects');
const contactSect = document.getElementById('contact');
let socialMediaContainer = document.getElementById('socialMediaContainer');
import {clicker, iconTitleLoader} from '../js/portfolio'
import portController from '../controllers/portController'

let fadeInPortfolio = () => {
    console.log('portfolio working...');
    welcomeSection.style.opacity = '0';
    resume.style.opacity = '0';
    projects.style.zIndex = '0';
    resume.style.zIndex = '-1000';
    contactSect.style.zIndex = '-1000';
    contactSect.style.opacity = '0';
    animationBox.style.opacity = '0.3';
    artBoard.style.opacity = '0';
    projects.style.display = 'flex';
    setTimeout(() => {
        projects.style.opacity = '1';
    }, 500);
    document.getElementById('vanillajs-icon').addEventListener('click', clicker);
    iconTitleLoader();
  }

  let fadeInResume = () => {
    console.log('resume working...');
    welcomeSection.style.opacity = '0';
    animationBox.style.opacity = '0.3';
    artBoard.style.opacity = '0'; 
    projects.style.opacity = '0'; 
    contactSect.style.opacity = '0';
    resume.style.display = 'flex';
    resume.style.zIndex = '0';
    projects.style.zIndex = '-1000';
    contactSect.style.zIndex = '-1000';
    resume.style.width = window.innerWidth;
    resume.style.height = window.innerHeight;
    let canvas = document.getElementById('pdfViewport');    
    canvas.style.transition = 'opacity 1s';
    canvas.style.opacity = '0';
    setTimeout(() => {
        resume.style.opacity = '1';
    }, 500);
  }

  let fadeInContact = () => {
    console.log('contact working...');
    resume.style.opacity = '0';
    welcomeSection.style.opacity = '0';
    animationBox.style.opacity = '0.3';
    artBoard.style.opacity = '0'; 
    projects.style.opacity = '0'; 
    resume.style.zIndex = '-1000';
    projects.style.zIndex = '-1000';
    contactSect.style.zIndex = '0';
    contactSect.style.display = 'flex';
    setTimeout(() => {
        contactSect.style.opacity = '1';
    }, 500);
  }

  

  export { fadeInPortfolio, fadeInResume, fadeInContact }