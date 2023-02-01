import './styles/main.scss';
import startAnimating from './js/animate';
import Resume from './js/Resume.jsx';
//MASTER CONTROLLERS IMPORTS
import {fadeInPortfolio} from './controllers/sectionController';
import { fadeInResume } from './controllers/sectionController';
import { fadeInContact } from './controllers/sectionController';

// SECTION CONTROLLER IMPORTS

const projects = document.getElementById('projects');

document.getElementById('targetProjects').addEventListener('click', fadeInPortfolio);
document.getElementById('targetResume').addEventListener('click', fadeInResume);
document.getElementById('targetContact').addEventListener('click', fadeInContact);
document.getElementById('portBtn').addEventListener('click', fadeInPortfolio);
document.getElementById('resBtn').addEventListener('click', fadeInResume);
document.getElementById('conBtn').addEventListener('click', fadeInContact);
//startAnimating(1);

//PORTFOLIO CONTROLLER









