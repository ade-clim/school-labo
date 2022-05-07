// change position sun
function moveSun(){
  
  posYSun += 2;
  if (posYSun > height -500) {
    // voir pour supprimer le soleil si il sort de l'écran
    moveSunAuto = false;
    changeThemeToNight();
    posYSun = 400;
  }
}

// change position clouds
function moveCloud(){
  
  posXCloud += 20;
  if (posXCloud > width) {
      posXCloud = -400;
  }
  
  // security for initial position, replace cloud in start screen animation
  if(darkMode){
    posXCloud = -500;
  }

  // replace cloud in initial position
  if(!moveSunAuto && !moveUpSunAuto){
    if(posXCloud >= 500 && posXCloud <= 530){
      posXCloud = 530;
      moveCloudAuto = false;
    }
  }
}

// change position rainbow
function moveRainbow(){
  
  posYRainbow += 4;
  
  // replace cloud outside screen
  if (posYRainbow > 800) {
    posYRainbow = 600;
    moveRainbowAuto = false;
  } 
}