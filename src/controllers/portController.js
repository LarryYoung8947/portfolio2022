import vanillaJSImgArr from "../js/imgArrays";

const projectTileImages = document.getElementsByClassName('project-tile-img');
const projectTiles = document.getElementsByClassName('project-tile');

let imgArr = vanillaJSImgArr;

const loadVanillaJS = () => { 
    let i = 0;
    Array.from(projectTiles).forEach((element, i) => {
        setTimeout(() => {
            element.classList.add('isFlipped');
        }, i * 500);
    })
    setTimeout(() => {
        let i = 0;
        Array.from(projectTileImages).forEach((element, i) => {
            setTimeout(() => {
                if (vanillaJSImgArr[i]) {
                    element.setAttribute('src', vanillaJSImgArr[i]);
                    element.style.opacity = '1';
                    console.log('src mapped')
                } else {
                    const blankTileMessage = document.createTextNode('Coming Soon');
                    let blankTileMessageBox = document.createElement('p');
                    blankTileMessageBox.appendChild(blankTileMessage); 
                    projectTiles[i].appendChild(blankTileMessageBox);
                    projectTiles[i].style.textAlign = 'center';
                    blankTileMessageBox.style.height = "100%";
                }
            }, i * 550);
        });
    }, 500);
    //buildTitleArray 
    //}

    //const loadReact = () => { 
    //flipTiles();
    //loadImgArr();
    //buildTitleArray 
    //}

    //const loadNode = () => { 
    //flipTiles();
    //loadImgArr();
    //buildTitleArray 
};

const portController = (e) => {
    console.log('port controller working...')
    console.log(e.srcElement.id);
    let clickedID = e.srcElement.id;
    if (clickedID = 'vanillajs-icon') {
        console.log(vanillaJSImgArr);
        loadVanillaJS();
    } else {
        console.log('This will never happen');
    }
    
    //loadReact();
    //loadNode();
}





export default portController;