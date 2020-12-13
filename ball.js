class ball{
    constructor(x,y,w,h){
        var ballOptions = {
            restitution : 0.8,
            density : 1
        }

        this.body = Bodies.circle(x,y,w,ballOptions);
        World.add(myWorld,this.body);
        this.width = w;
        this.height = h;
    }

    display(){
        //fill("red");
       // this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        ellipse(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}