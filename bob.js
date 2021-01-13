class bob
{
    constructor(x,y,w)
    {
        

        var options=
        {
            isStatic:false,
            restitution:1,
             density:1.2
         }
        
        this.width=w;
        this.body=Matter.Bodies.circle(x,y,this.width,options);
        Matter.World.add(world,this.body);
    }
    display()
    {
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.width);
    }
}