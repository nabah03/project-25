class Paper{
    constructor(x,y,r){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2

    }
   this.x = x;
   this.y = y;
   this.r = r;
   this.paper = loadImage("paper.png")
   this.body = Bodies.circle(this.x,this.y,this.r,options)
   World.add(world,this.body)
}
display()
{
    push()
    translate(this.body.position.x,this.body.position.y)
    imageMode(CENTER)
    image(this.paper,0,0,this.r,this.r)
    pop()
}    





}