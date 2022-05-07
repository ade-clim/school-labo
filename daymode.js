// change position sun
function moveUpSun() {
  
  posYSun -= 2;
  if (posYSun <= -90) {
    // voir pour supprimer le soleil si il sort de l'écran
    moveUpSunAuto = false;
    playSound(soundRooster);
  }
}

// change position rainbow
function moveUpRainbow() {
  posYRainbow -= 4;
  
  // replace cloud outside screen
  if (posYRainbow <= 220) {
    moveUpRainbowAuto = false;
  } 
}