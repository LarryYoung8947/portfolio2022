import {vanillaJSImgArr, reactJSImgArr} from "../js/imgArrays";

const projectTileImages = document.getElementsByClassName('project-tile-img');
const projectTiles = document.getElementsByClassName('project-tile');
const flipBtn = document.getElementsByClassName('flipBtn')
const projectTitleBox = document.getElementById('projectTitle')

let vanillaJSArr = vanillaJSImgArr;
let reactJSArr = reactJSImgArr;
let titles = ['Github', 'Javascript', 'React', 'Full Stach', 'API', 'Server']
let vanillaJSTitles = ['JavaScript Screensaver', 'Hangman Game', 'Keyboard', 'Merch Website']
let vanillaJSLinks = ['testing', 'https://first-hangman-game.herokuapp.com/', 'test']
let titleArray = Array.from(titles);
let projectTilesArray = Array.from(projectTiles);

const loadVanillaJSProject = (index) => {
    projectTilesArray.forEach((element, i) => {
        let currentElementIndex = i
        if (currentElementIndex === index) {
            element.style.display = 'none'        
            setTimeout(() => {
                element.classList.add('isClicked')
                element.style.display = 'flex'        
            }, 100)
        } else {
            element.style.display = 'none'        
        }
    })
}

const loadVanillaJS = (vanillaJSArr) => {
    let messageBoxes = document.querySelectorAll('.project-tile p');
        for (let i = 0; i < messageBoxes.length; i++) {
            let box = messageBoxes[i]
            console.log('this is the way', box)
            box.innerText = ""
        }
        let i = 0; 
    projectTilesArray.forEach((element, i) => {        
        element.classList.remove('isFlipped');
        setTimeout(() => {
            element.lastElementChild.id === 'messageBox' ? element.removeChild(element.lastElementChild): null;
            element.classList.add('isFlipped');
        }, i * 500);
    })
    setTimeout(() => {
        Array.from(projectTileImages).forEach((element, index) => {
            setTimeout(() => {
                if (vanillaJSArr[index]) {
                    projectTileImages[index].style.opacity = '1';
                    element.setAttribute('src', vanillaJSImgArr[index]);
                    element.style.opacity = '1';
                    console.log('src mapped');
                    projectTileImages[index].setAttribute('href', vanillaJSLinks[index])
                    element.addEventListener('mouseover', () => {
                        projectTitleBox.innerText = vanillaJSTitles[index]
                    })
                    element.addEventListener('click', () => {
                        loadVanillaJSProject(index);
                    })
                } else { 
                    element.setAttribute('src', null)
                    let blankTileMessage = document.createTextNode('Coming Soon');
                    let blankTileMessageBox = document.createElement('p');
                    //blankTileMessageBox.style.display = "inline-block";      
                    projectTiles[index].appendChild(blankTileMessageBox);
                    projectTiles[index].style.textAlign = 'center';
                    blankTileMessageBox.appendChild(blankTileMessage)
                    blankTileMessageBox.style.alignItems = "center";
                }
            }, index * 550);
        });
    }, 500);
}

    const loadReactJS = (reactJSArr) => { 
        let messageBoxes = document.querySelectorAll('.project-tile p');
        for (let i = 0; i < messageBoxes.length; i++) {
            let box = messageBoxes[i]
            console.log('this is the way', box)
            box.innerText = ""
        }
        let i = 0;
        Array.from(projectTiles).forEach((element, i) => {
            
            
            element.classList.remove('isFlipped');
            setTimeout(() => {
                element.classList.add('isFlipped');
            }, i * 500);
        })
        setTimeout(() => {
            let i = 0;
            Array.from(projectTileImages).forEach((element, i) => {
                
                setTimeout(() => {
                    if (reactJSImgArr[i]) {
                        projectTileImages[i].style.opacity = '1';
                        element.setAttribute('src', reactJSArr[i]);
                        element.style.opacity = '1';
                        console.log('src mapped')
                        projectTiles[i].style.alignItems = 'center';
                        projectTiles[i].style.textAlign = 'center';
                    } else { 
                        element.setAttribute('src', null)
                        projectTileImages[i].style.opacity = '0';
                        let blankTileMessage = document.createTextNode('Coming Soon');
                        let blankTileMessageBox = document.createElement('p');
                        blankTileMessageBox.setAttribute('class', 'messageBox');
                        //blankTileMessageBox.style.display = "inline-block";      
                        projectTiles[i].appendChild(blankTileMessageBox);
                        projectTiles[i].style.alignItems = 'center';
                        projectTiles[i].style.textAlign = 'center';
                        blankTileMessageBox.appendChild(blankTileMessage)                     
                    }
                }, i * 550);
            }); 
        }, 500);
};

const portController = (target) => {
    let clickedID = target.srcElement.id;
    if (clickedID === 'vanillajs-icon') {
        loadVanillaJS(vanillaJSArr);
    } else if (clickedID === 'react-icon') {
        loadReactJS(reactJSArr);   
    } else {
        null;
    }
}

Array.from(flipBtn).forEach((element, index) => {    
    element.addEventListener('click', portController)
    element.addEventListener('mouseover', () => {
        projectTitleBox.innerText = titleArray[index];
        console.log("hover detected")
    })
    element.addEventListener('mouseleave', () => {
        projectTitleBox.innerText = "Click an Icon Below to Select a Category"
    })
})

