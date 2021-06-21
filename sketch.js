var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var distanceX = 0;
var database;
var formscreen;
var b1,b2;
var form, player, game;

var cars, car1, car2, car3, car4;
var bs, b1, b2, b3, b4;
var bs_2, b1_2, b2_2, b3_2, b4_2;
var dbs, db1, db2, db3, db4;
var dbs_2, db1_2, db2_2, db3_2, db4_2;
var track, car1_img, car2_img, car3_img, car4_img;
var boundary1,boundary2;

function preload(){
  track = loadImage("infinite__valley.jpeg");
  car1_img = loadAnimation("0.png","1.png","2.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  formscreen = loadImage("images/formscreen.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();


  car1 = createSprite(100,200);
    car1.addAnimation("car1",car1_img);
    car2 = createSprite(300,200);
    car2.addAnimation("car1",car1_img);
    car3 = createSprite(500,200);
    car3.addAnimation("car1",car1_img);
    car4 = createSprite(700,200);
    car4.addAnimation("car1",car1_img);
    cars = [car1, car2, car3, car4];

    b1 = createSprite(100,200,5,50);
    b2 = createSprite(300,200,5,50);
    b3 = createSprite(500,200,5,50);
    b4 = createSprite(700,200,5,50);
    bs = [b1, b2, b3, b4];

    b1_2 = createSprite(100,200,5,50);
    b2_2 = createSprite(300,200,5,50);
    b3_2 = createSprite(500,200,5,50);
    b4_2 = createSprite(700,200,5,50);
    bs_2 = [b1_2, b2_2, b3_2, b4_2];
}


function draw(){
  background(formscreen);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  if(player.rank === 4){
    form.reset.position(displayWidth/2,displayHeight/2);
   
  }
car1.collide(b1)
  
}
