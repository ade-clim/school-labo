let ball;
let clock;
let dog;
let ballImg;
let dogImg;
let mouse;
let hitSound;
let unicorn;
let bgColor;
let nightColor;
let dayColor;
let roomKids;
let sun;
let butterfly;
let rainbow;
let hill;
let clouds02;
let board;
let light;
let posXCloud;
let posXSun;
let posYSun;
let posYRainbow;
let moveCloudAuto;
let moveSunAuto;
let moveRainbowAuto;
let hideRainbow;
let alphaRainbow;
let darkMode;
let bullets = [];
let pumpkinsImg = [];
let ghostsImg= [];
let enemies = [];
let score = 0;
let drawnLines = [];
let butterflyObj;
let soundChalk;
let soundClock;
let soundAmbianceNight;
let soundBullet;
let soundRooster;
let soundBall;
let world;
let engine;
let numKillGhost;

function preload() {
  
  moveCloudAuto = false;
  moveSunAuto = false;
  moveRainbowAuto = false;
  moveUpSunAuto = false;
  moveUpRainbowAuto = false;
  
  posXCloud = 530;
  posYSun = -90;
  posYRainbow = 220;
  
  // fonts
  fontTable = loadFont('data/fonts/Colored Crayons.ttf');
  
  // color background day/night
  darkMode = false;
  dayColor = "#77d0f0";
  nightColor = "#012038";
  bgColor = dayColor;
  
  // ghosts
  ghost01Img = loadImage('data/images/ghosts/ghost01.png');
  ghost02Img = loadImage('data/images/ghosts/ghost02.png');
  ghost03Img = loadImage('data/images/ghosts/ghost03.png');
  
  // pumpkins
  pumpkin01Img = loadImage('data/images/pumpkins/pumpkin_01.png');
  pumpkin02Img = loadImage('data/images/pumpkins/pumpkin_02.png');
  pumpkin03Img = loadImage('data/images/pumpkins/pumpkin_03.png');
  pumpkin04Img = loadImage('data/images/pumpkins/pumpkin_04.png');
  
  // load images background
  roomKids = loadImage('data/images/background/room_kids.png');
  cloudsImg = loadImage('data/images/background/clouds.png');
  sunImg = loadImage('data/images/background/sun.png');
  moonImg = loadImage('data/images/background/moon.png');
  starsImg = loadImage('data/images/background/stars.png');
  butterflysImg = loadImage('data/images/background/butterfly.png');
  rainbowImg = loadImage('data/images/background/rainbow.png');
  hillImg = loadImage('data/images/background/hill.png');
  clouds02Img = loadImage('data/images/background/clouds02.png');
  boardImg = loadImage('data/images/background/board.png');
  
  // load images assets
  clockImg = loadImage('data/images/clock.png');
  ballImg = loadImage('data/images/ball.png');
  dogImg = loadImage('data/images/dog.png');
  xylophoneImg = loadImage('data/images/xylophone.png');
  xylophoneInstruImg = loadImage('data/images/xylo_instru.png');
  carPumpkinImg = loadImage('data/images/car_pumpkin.png');
  carImg = loadImage('data/images/car.png');
  tableImg = loadImage('data/images/table.png');
  stoolImg = loadImage('data/images/stool.png');
  
  // load sound
  soundChalk = loadSound('data/sounds/chalk.mp3');
  soundClock = loadSound('data/sounds/clock.mp3');
  soundAmbianceNight = loadSound('data/sounds/ambiance_night_ghosts.mp3');
  soundBullet = loadSound('data/sounds/bullet_sound.mp3');
  soundRooster = loadSound('data/sounds/rooster.mp3');
  soundBall = loadSound('data/sounds/ball.mp3');
  soundKlaxon = loadSound('data/sounds/klaxon.mp3');
  soundGhostVanish = loadSound('data/sounds/ghost_vanish.mp3');
}

function setup() {
  
  createCanvas(1200,800);
  angleMode(DEGREES); // move hour in clock
  
  // create an engine
  engine = Matter.Engine.create();
  world = engine.world;
  
  // Sound xylophone
  env = new p5.Env();
  env.setADSR(0.01, 0.05, 1, 0.5);
  env.setRange(1, 0);
  osc = new p5.Oscillator('triangle');
  osc.amp(env);
  osc.start();
  
  car = new Car();
  
  // Object collision
  ball = new SpriteBall(world, { 
    x: 600, 
    y: 50, 
    r: 47,
    image: ballImg}, {
      label:"ball",
      density: 0.0008,
      frictionAir: 0.01,
      restitution: 1,
      friction: 0.01
    }
  );
  
  dog = new SpriteBlock(world, { 
    x: 900, 
    y: 700, 
    w: 200, 
    h: 200, 
    image: dogImg},{
      label:"dog",
      density: 1,
      restitution: 0,
      friction: 1
  });
  
  xylophone = new SpriteBlock(world, { 
    x: 310,
    y: 505,
    w: 106,
    h: 63,
    image: xylophoneImg},{
      isStatic: true,
      label:"xylophone"
  });
  
  xylophoneInstru = new SpriteBlock(world, { 
    x: 150,
    y: 550,
    w: 70,
    h: 11,
    image: xylophoneInstruImg},{
      label:"xylophoneInstru",
      density: 1,
      restitution: 0,
      friction: 1
  });
  
  table = new SpriteBlock(world, { 
    x: 320, 
    y: 585, 
    w: 328, 
    h: 205, 
    image: tableImg},{
      isStatic:true,
      label:"table"
  });
  
  stool = new SpriteBlock(world, { 
    x: 130, 
    y: 598, 
    w: 150, 
    h: 120, 
    image: stoolImg},{
      isStatic:true,
      label:"stool"
  });
  
  // Wall Collision
  groundBottom = new Block(world,
    { x: 600, y: 750, w: 1200, h: 5},
    { isStatic: true, label:"ground"}
  );
  
  groundTop = new Block(world,
    { x: 600, y: 0, w: 1200, h: 5},
    { isStatic: true, label:"ground"}
  );
  
  groundLeft = new Block(world,
    { x: 0, y: 400, h: 800, w: 5},
    { isStatic: true, label:"ground"}
  );
  
  groundRight = new Block(world,
    { x: 1200, y: 400, h: 800, w: 5},
    { isStatic: true, label:"ground"}
  );
  
  numKillGhost = 25; // number of ghost to kill
  
  // add image pumpkin to array for display random
  pumpkinsImg.push(pumpkin01Img);
  pumpkinsImg.push(pumpkin02Img);
  pumpkinsImg.push(pumpkin03Img);
  pumpkinsImg.push(pumpkin04Img);
  
  // add image ghost to array for display random
  ghostsImg.push(ghost01Img);
  ghostsImg.push(ghost02Img);
  ghostsImg.push(ghost03Img);
  
  spawnGhosts(); // initialize Ghosts

  // setup hit sound
  Matter.Events.on(engine, 'collisionStart', function(event) {
    const pairs = event.pairs[0];
    const bodyA = pairs.bodyA;
    const bodyB = pairs.bodyB;

    if (bodyA.label === "ball") {
      soundBall.play();
    }
    
    if (bodyA.label === "xylophoneInstru" && bodyB.label === "xylophone" || bodyA.label === "xylophone" && bodyB.label === "xylophoneInstru") {
      osc.freq(midiToFreq(random(60,70)));
      env.play();
    }  
    
  });
  
  // setup mouse
  mouse = new Mouse(engine, canvas);
  
  // run the engine
  Matter.Runner.run(engine);
  
}

//************ Mouse action ************//
function keyPressed() {
  
  if(darkMode){
    if (key == ' ') {
      let imgRandom = pumpkinsImg[floor(random(0,pumpkinsImg.length))];
      let bullet = new Bullet(imgRandom,car.x,car.y, 31,33);
      
      bullets.push(bullet);
      soundBullet.play();
    }
  }else{
    if (key == ' ') {
      playSound(soundKlaxon);
    }
  }
}

function mouseDragged() {
  
  if(!darkMode){
    if(mouseX > 80 && mouseX < 530 && mouseY > 80 && mouseY < 400){
      drawnLines.push({
        mouseX: mouseX,
        mouseY: mouseY,
        pmouseX: pmouseX,
        pmouseY: pmouseY,
      });
      playSound(soundChalk);
    }
  }
  return false;
}

function mouseClicked(){
  
  if(!darkMode){
    // click switch light action
    if(mouseX >= 800 && mouseX <= 960 && mouseY >= 100 && mouseY <= 260){
      moveCloudAuto = true;
      moveSunAuto = true;
      moveRainbowAuto = true;
    }
    return false;
  }
}
//************ Mouse action ************//

function changeThemeToNight(){
  darkMode = true;
  bgColor= nightColor;
  playSound(soundAmbianceNight);
}

function changeThemeToDay(){
  darkMode = false;
  spawnGhosts();
  bgColor= dayColor;
  moveUpSunAuto = true;
  moveUpRainbowAuto = true;
  moveCloudAuto = true;
}

function draw() {
  background(bgColor);
  
  // initialize position img, last position for first plan
  image(cloudsImg, posXCloud,-50);
  
  if(darkMode){
    image(starsImg, 0, 0);
    image(moonImg, 1050, 0);
  }else{
    image(sunImg, 1000,posYSun);
  }
  
  image(clouds02Img, 0,120);
  image(rainbowImg, 600,posYRainbow);
  image(hillImg, 0,380);
  image(butterflysImg, 680,320);
  image(clockImg, 750, 80);
  image(boardImg, 35,40);
  
  background(roomKids);
  
  // move cloud in draw
  if(moveCloudAuto) {
    moveCloud();
  }
  
  if(moveUpSunAuto) {
    playSound(soundClock);
    moveUpSun();
    speedTimetoClock();  
  }else if(moveSunAuto) {
    playSound(soundClock);
    moveSun();
    speedTimetoClock(); 
  }else {
    stopSound(soundClock);
    timeToClock();
  }
  
  // Change Board parametre day/night  
  if(darkMode) {
    displayMessageBoardInDarkMode();
  }else {
    displayMessageBoard();
  }
  
  // display object with collision
  groundBottom.draw();
  groundTop.draw();
  groundLeft.draw();
  groundRight.draw();
  ball.draw();
  dog.draw();
  stool.draw();
  table.draw();
  xylophone.draw()
  xylophoneInstru.draw();
  
  if(moveRainbowAuto) {
    moveRainbow();
  }
  
  if(moveUpRainbowAuto) {
    moveUpRainbow();
  }
  
  if(score == numKillGhost) {
    changeThemeToDay();
  }
  
  // Control car
  if (keyIsDown(RIGHT_ARROW)) {
    car.right();
  }
  
  if (keyIsDown(LEFT_ARROW)) {
    car.left();
  }
   
  if(darkMode) {
    fill(0,40,153,127);
    rect(0,0,1200,800); // color night full screen
    displayBulletAndEnnemies();
    car.showDarkMode();
  }else {
    car.show();
  }
  
}
