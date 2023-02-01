let frameCount = 0, fps, fpsInterval, startTime, now, then, elapsed;

const randomCoor = () => {
  let ranNumX, ranNumY;
  ranNumX = () => {
    return Math.floor(Math.random() * (380 - 20) + 20);
  }
   ranNumY = () => {
     return Math.floor(Math.random() * (380 - 20) + 20);
   }

   const point =`${ranNumX()} ${ranNumY()}`;
   return point;
}

const startAnimating = (fps) => {
  fpsInterval = 60/fps;
  then= Date.now();
  startTime = then;
  animate();
}

const animate = () => {
  now = Date.now();
  elapsed = now - then;
  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);
    const t = document.querySelector('#t');
    t.setAttribute('d', `M ${randomCoor()} L ${randomCoor()} L ${randomCoor()}`);
  }
  requestAnimationFrame(animate);
}

export default startAnimating;