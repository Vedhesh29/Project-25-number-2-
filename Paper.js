class Paper {

    constructor (x,y,radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        

        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2,
        }
        
        this.body = Bodies.circle(this.x,this.y,this.radius,options);
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,70); 
        strokeWeight(3);
        fill(255,0,255);
        
        pop();

    }

};