class Ball{
    constructor(x, y, r){
var options={
    density:1,
    frictionAir:0.05,
};
this.body=Bodies.circle(x,y,r,options);
this.r=r;
World.add(world, this.body);
    }
   display() {
       var pos=this.body.position;
       push();
       var angle=this.body.angle;
       translate(pos.x, pos.y)
       rotate(angle)
      
       fill('brown')
       ellipse(0, 0,this.r, this.r); 
       pop();
   } 
}