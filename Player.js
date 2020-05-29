class Player
{
  constructor()
  {
    this.loc = new createVector(20, 600);
    this.ducking = false;
    
    this.ground = this.loc.y;
    this.gravity = .5;
    this.velocity = 0;
  }
  
  updatePlayer()
  {
    if(this.loc.y < this.ground) //if off ground
    {
      this.velocity += this.gravity;
    }
    else this.velocity = 0;
    
    if(this.loc.y >= this.ground && this.up != 0) //if at ground level and jump key activated
    {
      this.velocity = -10;
    }
    
    this.loc.y += this.velocity;
    
    this.render();
  }
  
  render()
  {
    if(this.loc.y == this.ground)
    {
      if(this.ducking) image(sketch.duck, 20, loc.y, 100, 100);
      else image(sketch.walk, 20, loc.y, 100, 100);
    }
    else image(this.jump, 20, this.loc.y, 100, 100);
     
  }
  
  keyManager(pressDetect)
  {
    if(pressDetect) //PRESSED
    {
      if(key == 'w')
        this.up = -1;
      else if(key == 's' && this.loc.y == this.ground)
        this.ducking = true;
    }
    else //RELEASED
    {
      if(key == 'w')
      {
        this.up = 0;
      }
      else if(key == 's')
      {
        this.ducking = false;
      }
    }
  }
}