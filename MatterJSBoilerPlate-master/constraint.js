class Connect{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.connect = Constraint.create(options);
        World.add(world, this.connect);

        this.pointB = pointB;
    }

    fly(){
        this.connect.bodyA = null;

    }


    display(){
        if (this.connect.bodyA){  
        var pointA = this.connect.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}