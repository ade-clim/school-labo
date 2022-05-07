class Ghost {
  constructor(img,x,y,w,h) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
  }

  show() {
    image(this.img, this.x, this.y, this.w, this.h);
  }
}
