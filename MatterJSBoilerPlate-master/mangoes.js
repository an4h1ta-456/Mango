class Mangoes{
 constructor(x,y){
    var options = {
        isStatic: true,
        restitution:0,
        friction:1,
    }
    this.body = Bodies.circle(x, y, 20, options);
    this.r = 40;
    this.image = loadImage("Images/mango.png");
    World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
    push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,this.r,this.r);
        pop();
    }
}