var score=0
var life=3
var ghost

function preload() {
    appleimg = loadImage("apple.png")
    blueghostimg = loadImage("blue ghost.png")
    redghostimg = loadImage("red ghost.png")
    pinkghostimg = loadImage("Pink ghost.png")
    backgroundimg = loadImage("bg 1.jpg")
    backgroundimg = loadImage("bg 2.jpg")
    cherryimg = loadImage("cherry.png")
    pacmanimg = loadImage("pac man.gif")
    strawberryimg = loadImage("strawberry.png")
    wallimg = loadImage("wall.png")
    yellowghostimg = loadImage("yellow ghost.png")
}




function setup() {
    createCanvas(windowWidth, windowHeight)
    pacman = createSprite(50, height - 200, 50, 50)
    pacman.scale = 0.3
    pacman.addImage(pacmanimg)
    groundG=createGroup()
    for (var i = 0; i < width * 5; i += 80) {
        ground = createSprite(i, height - 100, width, 20)
        ground.addImage(wallimg)
        ground.scale = 0.5
    }
    //  groundG.add(ground)
    ground.velocityX=-6}
function draw() {
    background(backgroundimg)

    if(gameState===1){    spawnObstacles()
    spawnFruits()

    if(keyDown(UP_ARROW)){
        pacman.y-=6
    }

    if(kkyDown(DOWN_ARROW)){
        pacman.y+=6
    }


    if(ground.x<0){
        ground.x=width/2
    }


    if(ghost.isTouching(pacman)){
        life=life-1
    }

    if(obstacle.isTouching(pacman)){
        score+=1
    }

    

    if(life===0){
        gameState=2
    }
}
pacman.collide(ground)
    if(gameState===2){

    }
    drawSprites()

    fill(255)
    textSize(50)
    text("Score: "+score, width-300,100)
    
}

function spawnObstacces() {
    if (frameCount % 250 === 0) {
        var ghost= createSprite(width, height-120 , 10, 40);
        ghost.velocityX = -6;


        // //generate random obstacles
        var rand = Math.round(random(1, 4));
        switch  rand) {
             case 1: ghost.addImage(yellowghostimg);
             ghost.scale=0.05
                break;
             case 2: ghost.addImage(pinkghostimg);
            ghost.scale=0.05
                 break;                
             case 3: oghostaddImage(redghostimg);
            ghost.scale=0.05
                 break;                
             case 4: oghostaddImage(blueghostimg);
            ghost.scale=0.2
                break;
           
            default: break;
         }        oghosty = Math.round(random(height-500,height-180));
         //assignscale and lifetime to the obstacle           
                 oghostlifetime = 500;
    }
}

function spawnFruits() {
    if (frameCount % 150 === 0) {
        var obstacle = createSprite(width, height-120 , 10, 40);
        obstacle.velocityX = -6;


        // //generate random obstacles
        var rand = Math.round(random(1, 3));
        switch (rand) {
             case 1: obstacle.addImage(appleimg);
             obstcle.scale=0.105
                break;
             case 2: obstacle.addImage(cherryimg);
            obstacle.scale=0.02
                 break;                
             case 3: obstacle.addImage(strawberryimg);
            obstacle.scale=0.105
                 reak;
                
            
           
            default: break;
         }        obstacle.y = Math.round(random(height-500,height-180));
         //assignscale and lifetime to the obstacle           
                 obstacle.lifetime = 500;
    }
}


