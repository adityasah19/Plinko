class Plinko{
    constructor(x,y,r){
  var options={
    isStatic:0.5,
    restitution:0.5
  }
  this.r=10
  this.bodies=Bodies.circle(x,y,this.r,options)
  World.add(world,this.body)
    }
    display(){
      var pos=this.body.position
      var angle=this.body.angle
      push()
      translate(pos.x,pos.y)
      rotate(angle);
      //noStroke();
      //fill(this.color);
      ellipseMode(RADIUS)
      ellipse(0,0,this.r,this.r)
      pop()

    }
}