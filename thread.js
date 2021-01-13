class thread{
    constructor(a,b)
    {
        this.pointB=a;
        this.thread=Matter.Constraint.create(
            {
            bodyA:b,
            pointB:a,
            stiffness:0.2,
            length:250
        }
        );
        
        Matter.World.add(world,this.thread);
        
    }
    display()
    {
        var a=this.thread.bodyA.position;
        var b=this.pointB;
        strokeWeight(4);
        stroke("blue");
        line(a.x,a.y,b.x,b.y);
    }
}