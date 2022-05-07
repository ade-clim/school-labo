// time to clock by default
function timeToClock(){
  push()
  stroke("green");
  translate(882, 192);
  rotate(second() * 6 - 90);
  line(0, 0, 45, 0);
  pop()

  push()
  stroke("green");
  translate(882, 192);
  rotate(minute() * 6 - 90);
  line(0, 0, 30, 0);
  pop()
}

// time to clock speed
function speedTimetoClock(){ 
  push()
  stroke("green");
  translate(882, 192);
  rotate((millis() * 6 - 90)/10);
  line(0, 0, 45, 0);
  pop()

  push()
  stroke("green");
  translate(882, 192);
  rotate((millis() * 6 - 90)/50);
  line(0, 0, 30, 0);
  pop()
}