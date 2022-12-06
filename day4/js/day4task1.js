function focasuser(){
    var name=document.getElementById("name");
    name.style.border="3px blue solid";
    document.getElementById("err").style.display="none";
}

function vliadtion()
{
    var name=document.getElementById("name");
    if(name.value.length<3)
    {
        name.style.border="3px red solid";
        document.getElementById("err").style.display="block";
    }
    else
    {
        name.style.border="1px black solid";
        document.getElementById("err").style.display="none";
    }
}


function confirm(){

    var pass=document.getElementById("psw");
    var conpass=document.getElementById("psw-repeat");
   

    if((pass.value.length==conpass.value.length) &&((pass.value.length && conpass.value.length)!=0)&&((pass.value.length && conpass.value.length)>3)){
        pass.style.border="3px blue solid";
        conpass.style.border="3px blue solid";
    }else if(!(pass.value.length==conpass.value.length)){
        pass.style.border="3px red solid";
        conpass.style.border="3px red solid";
    }
    else if((pass.value==0) && (conpass.value==0)){
    pass.style.border="3px red solid";
    conpass.style.border="3px red solid";
    }

    else if((pass.value<3) && (conpass.value<3)){
        pass.style.border="3px red solid";
        conpass.style.border="3px red solid";
        }
   
}

function data(){

    var allinput= document.getElementsByTagName("input");


for (var i =0 ; i<allinput.length-1;i++)
{
    console.log(allinput[i].value)

if(allinput[i].value.length==0){
    alert ("errorr")
}else{
    location.assign("https://www.w3schools.com/howto/howto_css_register_form.asp")
}

}


}
