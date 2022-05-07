function displayMessageBoardInDarkMode(){
  
  cursor(CROSS);
  // School table
  const message = 'Survive this night';
  const messageGhost = `${score}/${numKillGhost} famtomes`;
  textFont(fontTable);
  textSize(32);
  fill("red");
  text(message, 150, 150, 400, 300);
  textSize(25);
  text(messageGhost, 200, 200, 400, 300);

//   const carShot = 'move your car with left, right and shot with space';
//   textFont(fontTable);
//   textSize(20);
//   fill("red");
//   text(carShot, 130, 250, 400, 300);
}


function displayMessageBoard() {
  
  const welcome = 'Welcome to class !';
  textFont(fontTable);
  textSize(32);
  fill("white");
  text(welcome, 160, 130, 400, 300);
  
  const sound = 'Active your sound';
  fill("yellow");
  textSize(24);
  text(sound, 160, 180, 400, 300);
  // const clockText = '- Click on clock for night mode';
  // const moveCar = '- Move car with left, right and space';
  // const xylo = '- use wooden stick on xylophone ';
  
  
  stroke(255);
  strokeWeight(5);
  drawnLines.forEach(drawnLine => {
    line(
      drawnLine.mouseX,
      drawnLine.mouseY,
      drawnLine.pmouseX,
      drawnLine.pmouseY);
  });

  if(mouseX > 80 && mouseX < 530 && mouseY > 80 && mouseY < 400){
    cursor('data/images/craie.png');
    // Draw the lines drawn by the user
    
  }else{
    cursor(ARROW);
  }
}