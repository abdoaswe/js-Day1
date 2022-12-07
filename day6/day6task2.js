function  Point3D(x=0 ,y=0 ,z=0){
      
    this.x=x;
    this.y=y;
    this.z=z;
     
   Point3D.prototype.print3DPoint=function(){

        

        console.log( this.x,this.y,this.z)

    }

    Point3D.prototype.calculateDistance=function(p1){

        cal=Math.sqrt((p1.x-this.x)^2+(p1.y-this.y)^2+(p1.z-this.z)^2);
      return cal

   }


}
  s= new Point3D()
  p1=new Point3D (1,2,3)
  s.print3DPoint();
console.log(s.calculateDistance(p1));



