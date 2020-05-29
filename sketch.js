let menu, game, walk, jump, duck, building, plane;
let index;

let mainmenu;
let playing;
let scores;


function setup()
{
	createCanvas(750, 750);
  	index = 0;//https://www.iconfinder.com/icons/211620/arrow_b_right_icon
  	//menu = loadSound("mainmenu.wav"); // https://freesound.org/people/joshuaempyre/sounds/251461/
  	//game = loadSound("game.wav"); // https://freesound.org/people/ShiftKun/sounds/435782/

  mainmenu = new MainMenu();
   playing = new Playing();
  scores = new HighScores();
}

function draw()
{
	background(0);
	switch(index)
  {
    case 0 : // Main menu
      mainmenu.render();
      break;
    case 1 : // playing
      playing.manager();
      break;
    case 2 : // scoreboard
      scores.render();
      break;
  }
}


function keyPressed()
{
  switch(index)
  {
    case 0: // main menu
      mainmenu.keyManager();
      break;
    case 1:
      playing.p.keyManager(true);
      break;
    case 2:
      break;
  }
}

function keyReleased()
{
  switch(index)
  {
    case 0: //main menu
    break;
    
    case 1: //playing
    playing.p.keyManager(false);
    break;
    
    case 2: //score
    break;
  }
}