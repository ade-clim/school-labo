// Execute One time a sound
function playSound(soundName){
  if(!soundName.isPlaying()){
    soundName.play(); 
  }
}

function stopSound(soundName){
  soundName.stop();
}