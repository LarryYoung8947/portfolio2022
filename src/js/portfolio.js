import vanillaJSImgArr from './imgArrays'

let currentArr;
let index = 0;
const tiles = document.querySelectorAll('.project-tile');
let tilesImg = document.querySelectorAll('.project-tile-img');
let currentTile = 6;
let imgIndex = 0;

const clicker = () => {
  let btnId = event.target.id;
  const imgArr = populateImages(btnId);
  imgLoader(imgArr);
  flipTiles(currentTile);
  const projectTitles = populateTitle(imgArr);
  document.getElementById('projectTitle').style.opacity = 1;
  titleLoader(projectTitles);
  iconTitleLoader();
  //change to make forEach method apply link changes to projects rather than the image src
}

const populateTitle = (imgArr) => {
  let projectTitles;
  if (currentArr === vanillaJSImgArr) {
    projectTitles = ['Bouncing Balls', 'Hangman Game', 'JavaScript Music Box', 'Sweetshot Website'];
  } else {
    projectTitles = null;
  }
  return projectTitles;
}

// const hrefLoader = (button) => {
//   switch(button) {
//     case 'vanillajs-icon':
//       //let hrefArr = vanillaJsHrefArr;
//       currentArr = vanillaJSImgArr;
//       //hrefLoader(button);
//       return imgArr;
//       break;
//     case 'react-icon':
//       imgArr = reactImgArr;
//       break;
//     case 'nodejs-icon':
//       imgArr = nodejsArr;
//       break;
//     case 'animation-icon':
//       imgArr = animationArr;
//       break;
//     case 'api-icon':
//       imgArr = apiArr;
//   }
// }

const titleLoader = (projectTitles) => {
  const images = document.querySelectorAll('.project-tile');
  let titleIndex = 0;
  for (let item of images) {
    (function() {
      let title = projectTitles[titleIndex];
      console.log(title);
      if (!title) {
        console.log('undefined title detected...');
        item.addEventListener('mouseover', function() {
          document.getElementById('projectTitle').innerHTML = 'Coming Soon';        
        })
        item.addEventListener('mouseout', function() {
          document.getElementById('projectTitle').innerHTML = 'Click an Icon To Select a Category';  
        })   
      } else {
        console.log("this is the way...")
        item.addEventListener('mouseover', function() {
          document.getElementById('projectTitle').innerHTML = `${title}`;    
        })
        item.addEventListener('mouseout', function() {
          document.getElementById('projectTitle').innerHTML = 'Click an Icon To Select a Category';  
        })
      }    
      titleIndex++;  
    }());
  }
}

const iconTitleLoader = () => {
  let iconTitles = ['GitHub', 'CodePen', 'Bitbucket', 'VanillaJS', 'React', 'NodeJS', 'Animation', 'API']
  console.log('icon title loader here...')
  const icons = document.querySelectorAll('.flipBtn');
  let iconIndex = 0;
  for (let item of icons) {
    (function() {
      let title = iconTitles[iconIndex];
      console.log(title);
      if (!title) {
        console.log('undefined title detected...');
        item.addEventListener('mouseover', function() {
          document.getElementById('projectTitle').innerHTML = 'Coming Soon';        
        })
        item.addEventListener('mouseout', function() {
          document.getElementById('projectTitle').innerHTML = 'Click an Icon To Select a Category';  
        })   
      } else {
        console.log("this is the way...")
        item.addEventListener('mouseover', function() {
          document.getElementById('projectTitle').innerHTML = `${title}`;        
        })
        item.addEventListener('mouseout', function() {
          document.getElementById('projectTitle').innerHTML = 'Click an Icon To Select a Category';  
        })
      }    
      iconIndex++;  
    }());
  }
}

const fillBlankTiles = (tileIndex) => {;
  let messageContainer = document.createElement('p');
  let message = document.createTextNode('Coming Soon...');
  let tileLink = document.getElementsByClassName('project-tile-link')[tileIndex];
  if (tileIndex <= 5) {
    messageContainer.appendChild(message);
    tileLink.removeChild(tileLink.firstChild);
    tileLink.appendChild(messageContainer);
    console.log(tileLink.firstChild);
    tileLink.children[0].style.verticalAlign = 'middle';
    tileLink.children[0].style.textAlign = 'center';
   /*  tileLink.addEventListener('mouseover', function() {
      document.getElementById('projectTitle').innerHTML = 'Coming Soon';
    });
    tileLink.addEventListener('mouseout', function () {
      document.getElementById('projectTitle').innerHTML = 'Click an Icon To Select a Category';
    }) */
    tileIndex++;
    fillBlankTiles(tileIndex);
    setTimeout(function () {
      tileLink.children[0].style.opacity = '1';
    }, 50);
  }
  else {
    console.log('loop over..');
  }
}


const imgLoader = (imgArr) => {
  let tileIndex = 0;
  console.log(imgArr);
  imgArr.forEach(function(element){
    const tiles = document.querySelectorAll('.project-tile-img');
    const tileLinks = document.querySelectorAll('.project-tile-link');
    tiles[tileIndex].setAttribute("src", element);
    tileLinks[tileIndex].setAttribute("href", vanillaJSImgArr[tileIndex]);
    tileIndex++;
  })
  fillBlankTiles(tileIndex);
  
}

const populateImages = (button) => {
  let imgArr;
  switch(button) {
    case 'vanillajs-icon':
      imgArr = vanillaJSImgArr;
      currentArr = vanillaJSImgArr;
      //hrefLoader(button);
      return imgArr;
      break;
    case 'react-icon':
      imgArr = reactImgArr;
      break;
    case 'nodejs-icon':
      imgArr = nodejsArr;
      break;
    case 'animation-icon':
      imgArr = animationArr;
      break;
    case 'api-icon':
      imgArr = apiArr;
  }
  return imgArr;
}

function flipTiles (currentTile) {
  setTimeout(function () {
    tiles[index].classList.add('isFlipped');
    setTimeout(function () {
      tilesImg[imgIndex].style.opacity = 1;
      imgIndex++;
    }, 250);
    
    index++;
    if(--currentTile) {
      flipTiles(currentTile);
    }
  }, 80);

  setTimeout(function() {
    for(let i = 0; i < 6; i++) {
      tiles[i].classList.remove('flip');
    }
  }, 1400);
  /* for (let item of tilesImg) {
    item.addEventListener("mouseover", function() {
      document.getElementById('projectTitle').innerHTML = projectTitle;
    })
    item.addEventListener("mouseout", function() {
      document.getElementById('projectTitle').innerHTML = 'Click an Icon To Select a Category';
    })
  } */
};





export {clicker, iconTitleLoader};