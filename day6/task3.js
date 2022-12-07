function student (courses){

    this.courses=courses



    student.prototype.display=function()
    {    
                for(var i=0 ;i<=courses.length-1;i++){

                    if(courses[i].Name=="ahmed")

          console.log( "courses : "+ this.courses[i].Objact)

        }

    }
       


    student.prototype.calcgrades=function(){
         
        var calc=0;
       

        for(var i=0 ;i<=courses.length-1;i++){
                  
            if(courses[i].Name=="ahmed")
            
             calc=calc+courses[i].Grades
                //   console.log(calc)
            
  
          }

          return calc;
    }





}


s1= new student([{"Name":"ahmed","Age":20,"Objact":"Math","Grades":30},{"Name":"ahmed","Age":25,"Objact":"Programing","Grades":20},{"Name":"abdo","Age":30,"Objact":"PHP FULL Stack","Grades":40}])

s1.display()
s1.calcgrades()
console.log( "Total Grads :"+ s1.calcgrades())