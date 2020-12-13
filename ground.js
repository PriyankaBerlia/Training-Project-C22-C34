class ground{
    constructor(x,y,w,h){
        var groundOptions = {
            isStatic : true
          }
        
          this.body = Bodies.rectangle(x,y,w,h,groundOptions);
          World.add(myWorld,this.body);
          this.width = w;
          this.height = h;
    }

    display(){
        fill("red");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);

    }
}