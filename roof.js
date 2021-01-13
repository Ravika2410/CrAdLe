class roof
{
    constructor(x,y,w,h)
    {
        var options=
        {
            isStatic:true
        }
        this.width=w;
        this.height=h;
        this.body=Matter.Bodies.rectangle(x,y,this.width,this.height,options);
        Matter.World.add(world,this.body);
    }
    display()
    {
        push()
        fill("red");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    pop();
    }
}