

var db
var player, form, game, playerCount, gameState = 0
var players, distance
var car1, car2, car3, car4, cars
function setup(){
    createCanvas(displayWidth - 20,displayHeight - 30);
    //creating database
    db = firebase.database()
    game = new Game()
  game.getState()
  game.start()

}

function draw(){
    background("white");

      if(playerCount === 4){
        game.updateState(1)



      }
     if(gameState === 1){
      game.play()

     } 
    
}




