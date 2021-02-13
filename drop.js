class Drop{
constructor(x,y){
    this.body = Bodies.circle(x,y,5);
  //  this.rain = []
    World.add(world, this.body);
  }

  display() {
   
    var pos = this.body.position

    //  this.rain.push (pos)
    
   // for(var i =0;i<this.rain.length;i = i+1){

        fill ("blue")
     circle(pos.x,pos.y,10)

    

  }
  
}