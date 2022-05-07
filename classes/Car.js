class Car {
  constructor() {
    this.x = 50;
    this.w = 200;
    this.h = 115;
    this.y = height - this.h;
    
  }

  //method right move
  right(){
    if(this. x > width ){
      this.x = -200;
    }
    this.x += 5;
  }
  
  //method left move
  left(){
    if(this. x < -200){
      this.x =  width;
    }
    this.x -= 5;
  }
  
  // move() {
  //   this.y += this.vy;
  //   this.vy += this.gravity;
  //   this.y = constrain(this.y, 0, height - this.r);
  // }

  showDarkMode(){
    image(carPumpkinImg, this.x, this.y, this.w, this.h);
  }
  
  show() {
    image(carImg, this.x, this.y, this.w, this.h);
  }
}
