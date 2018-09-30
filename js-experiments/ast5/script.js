var canvas = document.getElementById('playing-area-canvas');
var ctx = canvas.getContext('2d');
var scoreBoard = document.getElementById('score-board');
var smashSound = document.getElementById('smash-sound');

/* ant class*/
var Ant = function(x, y, ballRadius, color){
  this.x = x;
  this.y = y;
  this.ballRadius = ballRadius;
  this.color = color;
  this.dx = 1;
  this.dy = -1;

  var self = this;

  this.update = function(){
    makeBall();
    move();
    detectCollision();
  };

  var makeBall = function(){
    ctx.beginPath();
    ctx.arc(self.x, self.y, self.ballRadius, 0, Math.PI*2);
    ctx.fillStyle = self.color;
    ctx.fill();
    ctx.closePath();

    var antSprite = new Image();
    antSprite.src = 'ant.gif';
    ctx.drawImage(antSprite, self.x-18, self.y-18);
  };

  var move = function(){
    self.x += self.dx;
    self.y += self.dy;
  };

  var detectCollision = function(){
    //to bounce off the ants inside the canvas
    if(self.y+self.dy < self.ballRadius || self.y+self.dy > canvas.height-self.ballRadius){
      self.dy = -self.dy;
    }
    if(self.x+self.dx < self.ballRadius || self.x+self.dx > canvas.width-self.ballRadius){
      self.dx = -self.dx;
    }
  };

};


//Main Game class
var Game = function(){
  this.noOfAnts = 10;
  this.ants = [];
  this.score = 0;
  var self = this;

  //game loop
  this.draw = function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);//clearing the canvas

    for(var i=0; i<self.noOfAnts; i++){
      (self.ants[i]).update();
    }

    collisonDetection();

  };

  this.init = function(){
    //adding event listener
    canvas.addEventListener('mousedown', doMouseDown, false);

    //initialize ants
    for(var i=0; i<self.noOfAnts; i++){

      self.ants[i] = new Ant(
        Math.floor((Math.random()*(canvas.width-20)) + 20),
        Math.floor((Math.random()*(canvas.height-20)) + 20),
        44,
        "#eee"
      );
    }

    setInterval(self.draw, 10);
  };


  var distanceCalculator = function(x1, y1, x2, y2){
    //TODO: check if the coordinate is negative
    return Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
  };

  //mousedown event handler
  var doMouseDown = function(event){
    canvasX = event.pageX;
    canvasY = event.pageY;

    var temparr = self.ants;
    for(var i=0; i<(self.ants).length; i++){

      var dis = distanceCalculator(canvasX, canvasY, (self.ants[i]).x, (self.ants[i]).y);
      if(dis < (self.ants[i]).ballRadius){
        smashSound.play();
        self.score++;
        displayScore();
        if(self.score == 10) alert('Game over!');
        //removing ants[i] from array
        temparr.splice(i,1);
        self.ants = temparr;
        self.noOfAnts--;
      }
    }
  };

  var collisonDetection = function(){
    for(var i=0; i<self.noOfAnts; i++){
      for(var j=i+1; j<self.noOfAnts; j++){
        if(j === undefined) continue;
        var dis = distanceCalculator(self.ants[i].x, self.ants[i].y, self.ants[j].x, self.ants[j].y);
        if(dis < self.ants[i].ballRadius + self.ants[j].ballRadius){
          //console.log('Collision!!!');
          self.ants[i].dx = -self.ants[j].dx;
          self.ants[i].dy = -self.ants[j].dy;
        }
      }
    }
  };

  var displayScore = function(){
    scoreBoard.innerHTML = self.score;
  };

};


var game = new Game();
game.init();
