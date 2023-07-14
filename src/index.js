import './styles/main.scss';
import './styles/welcome.scss';
import './styles/resume.scss'
import './styles/portfolio.scss';
import './styles/contact.scss';
import startAnimating from './js/animate';
import Resume from './js/Resume.jsx';
//MASTER CONTROLLERS IMPORTS
import {fadeInAnimation, fadeInPortfolio, fadeInWelcomeSection, fadeInNav} from './controllers/sectionController';
import { fadeInResume } from './controllers/sectionController';
import { fadeInContact } from './controllers/sectionController';

const attachListeners = () => {
    document.getElementById('targetProjects').addEventListener('click', fadeInPortfolio);
    document.getElementById('targetResume').addEventListener('click', fadeInResume);
    document.getElementById('targetContact').addEventListener('click', fadeInContact);
    document.getElementById('portBtn').addEventListener('click', fadeInPortfolio);
    document.getElementById('resBtn').addEventListener('click', fadeInResume);
    document.getElementById('conBtn').addEventListener('click', fadeInContact);
}

window.innerWidth > 600 ? document.documentElement.addEventListener('load', fadeInNav()) : null;

document.documentElement.addEventListener('load', fadeInWelcomeSection())

document.documentElement.addEventListener('load', fadeInAnimation());

attachListeners();




// SECTION CONTROLLER IMPORTS


//startAnimating(1);

//PORTFOLIO CONTROLLER









