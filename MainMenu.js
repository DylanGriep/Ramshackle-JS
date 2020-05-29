class MainMenu
{
	constructor()
	{
		this.x = 200;
		this.y = 300;
		this.w = 200;
		this.h = 200;

		this.minArrowX = this.x;
		this.maxArrowX = this.x+15;
		this.arrowX = this.x;

		this.r = 0;
		this.g = 0;
		this.b = 0;

		this.music = false;
		this.right = true;
		this.increaseR = true;
		this.increaseG = true;
		this.increaseB = true;
        this.index = 0;
        this.max = 1;
      
        this.logo = loadImage("assets/ramshackle.png");
 	    this.play = loadImage("assets/play.png");
    	this.score = loadImage("assets/highscores.png");
  	    this.arrow = loadImage("assets/arrow.png");
	}

  render()
  {
    if(!this.music)
    {
      this.music = true;
      //sketch.menu.loop();
    }
    //render stuff here
    fill(250);
    //rect(x, y, w, h);
    textSize(40);
    textAlign(CENTER);
    image(this.logo, width/2-250, 50, 500, 200);
    image(this.arrow, this.arrowX, this.y + this.index*75, 50, 50);
    if(this.index == 0 ) tint( this.r, 11, 255);
    image(this.play, this.x, this.y-20);
    noTint();
    if(this.index == 1) tint( 11, 255, this.r);
    image(this.score, this.x+50, this.y+50);
    noTint();
    //onButtonClick();
    this.arrowAnimate();
    this.colorizer();

  }
  
  
  colorizer()
  {
    if(this.r  == 255) this.increaseR = false;
    else if (this.r == 0) this.increaseR = true;
    if(this.increaseR) this.r++;
    else this.r--;
  }
  
  onButtonClick()
  {
    if(mouseX > x &&  mouseX < x+w && mouseY > y && mouseY < y+h)
    {
      //f18magd150_Ramshackle_GriepCollins.menu.stop();
      sketch.index++;
    }
  }
  
  arrowAnimate()
  {
    if(frameCount % 5 == 0)
    {
      if(this.right)
      {
        if(this.maxArrowX == this.arrowX) this.right = false;
        else this.arrowX++;
      }
      else
      {
        if(this.minArrowX == this.arrowX) this.right = true;
        else this.arrowX--;
      }
    }
  }
  
  //Manages key input
  keyManager()
  {
    //INDEX MANAGER
    if(key == 's')
    {
      if(this.index != this.max) this.index++;
      
      else this.index = 0;
    }
    else if(key == 'w')
    {
      if(this.index != 0) this.index--;
      else this.index = this.max;
    }
    
    
    //NextScreenDecider (Decides what screen to show depending on index, also stops music)
    if(key == ' ')
    {
      index = (this.index == 0 ? 1 : 2); //if index == 0, send user to game... else send to score page
      this.music = false;
      //sketch.menu.stop();
    }
      
  }
}