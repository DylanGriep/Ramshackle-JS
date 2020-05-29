class Obstacle
{ 
  
  constructor(x, y, speed, isBuilding)
  {
    this.loc = createVector(x,y);
    this.speed = speed;
    this.building = isBuilding;
  }
  
  /**constructor(x, y, speed)
  {
    loc = new createVector(x,y);
    this.speed = speed;
    randomize();
  }**/
  
  randomize()
  {
    building = round(random(1)) == 0 ? true:false;
    loc.y = building ? 650:580;
  }
}