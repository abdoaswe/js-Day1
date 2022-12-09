// class person {
 
 
  
//   #id;
//          constructor(a,b){
            
//             this.name=a;
//             this.Salary=b;
//            }


//       setID(x)
//        {

//         this.#id=x;
//        }

//     getID()
//     {
//         return this.#id;
//     }


//     getdata()
//     {
//         console.log("make imple to this function")
//     }




// }


// class Employee extends person 
// {   
  
//     constructor(a,b)
//     {  
//         super(a,b) 
//     }
          
    
//     static  displayHTRules()
//     {

//         console.log("company’s HR rules")

//     }

//     static showSalary(){

//         console.log("Salary :"+s2.Salary)
//     }

//     static increaseSalalry(){
               
//         var total=s2.Salary+s1.Salary
//         console.log( "Total Salary :"+total)
//     }

//     display()
//     {
//         console.log(this.name)
//     }

    
// }



// class Student extends person {

//     constructor(a,b)
//     {
//         super(a,b) 
//     }

//     display()
//     {
//         console.log("student");
//     }

// }



// var p1=new person("ahmed",22);


// var s1=new Student('sayed',38)
// var s2=new Employee('sayed',1000)
// Employee.displayHTRules()


// console.log(p1)












///////////////////////////////task 2///////////////////////////////////


// Employee.showSalary()
// Employee.increaseSalalry()


///////////////////////task 3//////////////////////////

// var ScientificDepartment={
//     Name:"ahmed",
//     Location:"aswan",
//     Adress :{"City":"Aswan","Street":"Elaswy-street","zip code":8111}
// }
// ;

// function display (){

//     return "Name : "+ ScientificDepartment.Name+"</br> Location : "+ScientificDepartment.Location
//     +" </br>Address => city :"+ScientificDepartment.Adress.City+"</br> Adderss => Street :"+ScientificDepartment.Adress.Street
//     +"</br> Adderss => zip code : "+ScientificDepartment.Adress["zip code"]
// }

// document.write(display());

/////////////////////// task 4 ////////////////

//  var array=[2,4,5,6,200,7,8,11,9,10,12,99]

// function arr (){
    
   
//     return  "Max Number"+Math.max(...array)+"</br> min number"+Math.min(...array)

// }

// document.write(arr ()) 

//////////////////////////////// task 5 ////////////////////


var fruits = ["apple", "strawberry", "banana", "orange", "mango"] 
  
// var map=array.map(function(item)
// {
//     return item+item
// }
// )

// console.log(map)


// var filterstr=fruits.filter(function (item)
// {      
    
//     console.log(isNaN(item) ? true :false) 
// }
// )



// var filter=fruits.filter(function(item)
// {
//     return item.startsWith("b")+item.startsWith("s")
// }
// )

// console.log(filter)


// var newarr=[]
// var arr
// fruits.forEach(function(item)
// {
//      if(item.indexOf("a",0)==0 || item.indexOf("b",0)==0 )
//    return newarr.push(item)
 
// }

// )

// console.log(newarr)



// newarr.forEach(function(item){
//     console.log(item)
// })

////////////////////////////////// task 6 //////////////



var countres=["Egypt","sudan","sudan","aswan","luxer","cairo"];

var arr=countres.length 
var set=new Set(countres)
console.log(arr-set.size)




