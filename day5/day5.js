// var cokii;
// function aswe() 
// {

// var user= document.getElementById("username").value;
// console.log(user)
// var pass= document.getElementById("password").value;
// console.log(pass)

// document.cookie="Username="+user.value+";expires=05 Dec 2002 11:55:28;"
// document.cookie="password="+pass.value+";expires=05 Dec 2002 11:55:28;"
// 

// var lol =localStorage.setItem("Email :",user);
//     var getEmail= localStorage.getItem("Email :");

//  var password =localStorage.setItem("password :",pass);
//     var getData= localStorage.getItem("password :");
      
//     localStorage.clear();
// }

//////////////////////////////////////task 2 /////////////////////////


var data = new XMLHttpRequest ();
data.open('Get',"https://dummyjson.com/todos");
data.send()
data.onreadystatechange =function()
{
     if(data.readyState==4&&data.status==200){
        var products=JSON.parse(data.responseText).todos
        // console.log(products)
        for(var i=0 ;i<products.length;i++){
            
            
            if(products[i].completed===true)
            {
               console.log(products[i])
               var mydiv= document.createElement("ul")
                  var todo =document.createElement("li")
                  var completed =document.createElement("li")
                  var  userId =document.createElement("li")
           mydiv.innerHTML="id = "+products[i].id
            todo.innerHTML= "todo = "+products[i].todo
            completed.innerHTML="completed =" +products[i].completed
            userId.innerHTML="userId = " +products[i].userId
            


            mydiv.appendChild(todo)
            mydiv.appendChild(completed)
            mydiv.appendChild(userId)

                  
           document.body.appendChild(mydiv)

               
            }

           
             

        }

     }
} 



// localStorage.setItem("card",JSON.stringify(data));



// var productApi=new XMLHttpRequest();
// productApi.open('GET',"https://dummyjson.com/products");
// productApi.send();
// productApi.onreadystatechange=function()
// {
//     if(productApi.readyState==4&&productApi.status==200)
//     {
//         var products=JSON.parse(productApi.responseText).products
//        for(var i=0;i<products.length;i++)
//        {
//         document.getElementById('mydiv').innerHTML+=`<div class="card">
//         <img src=${products[i].thumbnail
//         } alt="Denim Jeans" style="width:100%">
//         <h1>${products[i].title}</h1>
//         <p class="price">${products[i].price} $</p>
//         <p>${products[i].description}</p>
//         <p><button>Add to Cart</button></p>
//       </div>`
//        }
//     }
// }

