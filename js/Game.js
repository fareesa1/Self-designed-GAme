class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,200);
    car1.addAnimation("car1",car1_img);
    car2 = createSprite(300,200);
    car2.addAnimation("car1",car1_img);
    car3 = createSprite(500,200);
    car3.addAnimation("car1",car1_img);
    car4 = createSprite(700,200);
    car4.addAnimation("car1",car1_img);
    cars = [car1, car2, car3, car4];

    b1 = createSprite(100,-700,5,4000);
    b2 = createSprite(300,-700,5,4000);
    b3 = createSprite(500,-700,5,4000);
    b4 = createSprite(700,-700,5,4000);
    bs = [b1, b2, b3, b4];

    b1_2 = createSprite(100,-700,5,4000);
    b2_2 = createSprite(300,-700,5,4000);
    b3_2 = createSprite(500,-700,5,4000);
    b4_2 = createSprite(700,-700,5,4000);
    bs_2 = [b1_2, b2_2, b3_2, b4_2];
    
    db1 = createSprite(100,-3500,15,2000);
    db2 = createSprite(300,-3500,15,2000);
    db3 = createSprite(500,-3500,15,2000);
    db4 = createSprite(700,-3500,15,2000);
    dbs = [db1, db2, db3, db4];

    db1_2 = createSprite(100,-3500,15,2000);
    db2_2 = createSprite(300,-3500,15,2000);
    db3_2 = createSprite(500,-3500,15,2000);
    db4_2 = createSprite(700,-3500,15,2000);
    dbs_2 = [db1_2, db2_2, db3_2, db4_2];

    for(var i = 0; i<cars.length;i++){
      cars[i].scale = 0.8
    }
    
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      // push()
      // tint(100,250,0)
      image(track, -200,-displayHeight*3.8, displayWidth*2,height*5);
      // pop()
      camera.zoom = 4
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = (width*2)/2;
      var y;

      for(var plr in allPlayers){
        
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x =displayWidth - allPlayers[plr].distanceX;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          // fill("red");
          // ellipse(x,y,30,30);
          cars[index - 1].shapeColor = "red";
          camera.position.x = cars[index-1].x;
          camera.position.y = cars[index-1].y;
          
         bs[index-1].x = (width*2)/2+60
         bs_2[index-1].x = (width*2)/2-100

         dbs[index-1].x = (width*2)/2+60
         dbs_2[index-1].x = (width*2)/2-100
        //  bs[index-1].y=  cars[index-1].y 
        //  bs_2[index-1].y=  cars[index-1].y 
        //  cars[index - 1].isTouching(b1)

        
        switch(player.distance){
          case 800:bs[index-1].x = bs[index-1].x-300;
          console.log("move")
          break
        }
       
           if(!cars[index - 1].isTouching( bs[index-1]) ) {
            // console.log("crashhhh! :D")

      
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distanceX -=10
      player.update();
    }
      } 

      if(!cars[index - 1].isTouching( bs_2[index-1]) ) {
        console.log(player.distance)
if(keyIsDown(LEFT_ARROW) && player.index !== null){
        player.distanceX +=10
        player.update();
      }

  } 
      
        }
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }

    if(keyDown("space") && player.index !== null){
     camera.zoom =camera.zoom  - 2.5
    }

    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.distance -=50
      player.update();
    }
    if(player.distance > 7860){
      gameState = 2;
      player.rank += 1;
      player.update();
      Player.updateCarsAtEnd(player.rank);
    }
    
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    form.displayEnd();

  
}



}
