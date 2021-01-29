class lightBob{
    constructor(x,y,diameter){
        var options = {
            isStatic:false,
            'restitution':3.0,
            'friction':0.05,
            'density':10.0,
            
        }

        this.body=Bodies.circle(x,y,diameter,options);
        this.diameter=diameter;
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0,0,this.diameter,this.diameter);       
        pop();
    
        
    }
}