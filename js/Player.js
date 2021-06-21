class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
    this.distanceX = 0;

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  getCarsAtEnd(){
    database.ref('carsAtEnd').on("value",(data)=>{
      this.rank = data.val();
    });
  }

  static updateCarsAtEnd(rank){
    database.ref('/').update({
      carsAtEnd: rank
      
    })

  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      distanceX:this.distanceX,
      rank:this.rank
    });
  }

  updateReset(){
    database.ref('/').update({
      players:null
  
    });
  }


  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
