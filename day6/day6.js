function box(width, height,containt){

   this.width=width;
   this.height=height;
   this.containt=containt;



   box.prototype.pages=function(){

         var sumAllPages=0
            for(var i=0 ;i < box.length;i++)

                 {

                var s1= new box(100,50,[{"id":2,"name":"ahmed","writer Name":"yosri","nums":12},{"id":1,"name":"abdo","writer Name":"karim","nums":12},{"id":3,"name":"mohsen","writer Name":"sawsan","nums":12}])    
                sumAllPages+= s1.containt[i].nums;
                // sumAllPages = s1
                 }

                 

                 return sumAllPages
   }

  
}

var f = new box()
console.log(f.pages());
box.prototype.clac=function()
{     
    
    return  this.width+this.height;

   
}



function book(id,name,writer_name,_nums)
{   


    this.id=id;
    this.name=name;
    this.writer_name=writer_name;
    this.nums=_nums
    
    
}


 var s1= new box(100,50,[{"id":2,"name":"ahmed","writer Name":"yosri","nums":12},{"id":1,"name":"abdo","writer Name":"karim","nums":12},{"id":3,"name":"mohsen","writer Name":"sawsan","nums":12}])
// var s2= new box(160,60,60)
// var s3= new box(200,10,10)
//var s3= new book(21,"iti aswan","abdelmonam",23)
 
console.log(s1)
console.log(s1.clac(1,2))

// console.log(sumAllPages)
