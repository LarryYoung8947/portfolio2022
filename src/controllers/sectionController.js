const welcomeSection = document.getElementById('welcomeSection');
const animationBox = document.getElementById('animationBox');
const artBoard = document.getElementById('artBoard');
const resume = document.getElementById('resume');
const resumeContainer = document.getElementById('resume-container');
const projects = document.getElementById('projects');
const contactSect = document.getElementById('contact');
const vertNav = document.getElementById('vertNav')
let socialMediaContainer = document.getElementById('socialMediaContainer');
import portController from '../controllers/portController'



let fadeInPortfolio = () => {
    console.log('portfolio working...');
    welcomeSection.style.opacity = '0';
    resumeContainer.style.opacity = '0';
    projects.style.zIndex = '0';
    resume.style.zIndex = '-1000';
    contactSect.style.zIndex = '-1000';
    contactSect.style.opacity = '0';
    animationBox.style.opacity = '0.3';
    projects.style.display = 'flex';
    setTimeout(() => {
        projects.style.opacity = '1';
    }, 500);
  }

  let fadeInResume = () => {
    console.log('resume working...');
    welcomeSection.style.opacity = '0';
    animationBox.style.opacity = '0.3';
    projects.style.opacity = '0'; 
    contactSect.style.opacity = '0';
    resume.style.display = 'flex'
    resumeContainer.style.display = 'flex';
    resumeContainer.style.zIndex = '0';
    projects.style.zIndex = '-1000';
    contactSect.style.zIndex = '-1000';
    let canvas = document.getElementById('pdfViewport');    
    canvas.style.transition = 'opacity 1s';
    canvas.style.opacity = '0';
    setTimeout(() => {
      resume.style.opacity = '1'
      resumeContainer.style.opacity = '1';
    }, 500);
  }

  let fadeInContact = () => {
    console.log('contact working...');
    resume.style.opacity = '0';
    welcomeSection.style.opacity = '0';
    animationBox.style.opacity = '0.3';
    projects.style.opacity = '0'; 
    resume.style.zIndex = '-1000';
    projects.style.zIndex = '-1000';
    contactSect.style.zIndex = '0';
    contactSect.style.display = 'flex';
    setTimeout(() => {
        contactSect.style.opacity = '1';
    }, 500);
  }

  const fadeInWelcomeSection = () => {
    document.getElementById('pageContainer').style.display = "block"
    welcomeSection.style.display = 'block';
    
    setTimeout(() => {  
        welcomeSection.style.opacity = '1';
    }, 500);
  }

  const fadeInAnimation = () => {
    animationBox.style.display = 'block';   
    
    setTimeout(() => {  
        animationBox.style.opacity = '1';
    }, 500);
  }

  const fadeInNav = () => {
    vertNav.style.display = 'flex';   
    
    setTimeout(() => {  
        vertNav.style.opacity = '1';
    }, 500);
  }

  

  export { fadeInPortfolio, fadeInResume, fadeInContact, fadeInWelcomeSection, fadeInAnimation, fadeInNav}