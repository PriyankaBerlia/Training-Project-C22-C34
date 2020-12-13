class sling{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.009,
            length : 150
        }
        this.pointB=pointB;
        this.sling1 = Constraint.create(options);
        World.add(myWorld,this.sling1);
    }

    display(){
        if(this.sling1.bodyA){
        line(this.sling1.bodyA.position.x,this.sling1.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
    }

    leave(){
        this.sling1.bodyA=null;
    }
}