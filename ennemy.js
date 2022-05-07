function getCreateGhost(){
  let imgRandom = ghostsImg[floor(random(0,ghostsImg.length))];
  let newghost = new Ghost(imgRandom,random(0, width-200),random(-1000, 0),142,182);
  return newghost;
}

//initialize position ghost, bullet and score
function spawnGhosts(){
  score = 0;
  bullets = [];
  ghosts = [];
  
  for (let i = 0; i < 20; i++) {
    
    const newGhost = getCreateGhost();
    ghosts.push(newGhost);
  }
}

// display ghost and bullet and manage collision
function displayBulletAndEnnemies(){
  for (let bullet of bullets) {
    bullet.y -= 10;
    bullet.show();
  }

  // update and draw enemies
  for (let ghost of ghosts) {
    
    ghost.y += 1;
    ghost.show();
    //image(ghost01,enemy.x, enemy.y,142,182);
    if (ghost.y > height) {
      ghosts.splice(ghosts.indexOf(ghost), 1);
    }
  }

  // deal with collisions
  for (let ghost of ghosts) {
    
    for (let bullet of bullets) {

      if (dist((ghost.x + 142/2), (ghost.y + 182/2), bullet.x, bullet.y) < 60) {
        
        ghosts.splice(ghosts.indexOf(ghost), 1);
        soundGhostVanish.play(); // play sound if ghost is dead
        bullets.splice(bullets.indexOf(bullet), 1);
        
        const newGhost = getCreateGhost();
        ghosts.push(newGhost);
        score++;
      }
    }
  }
}