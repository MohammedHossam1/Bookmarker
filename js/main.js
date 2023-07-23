var Nim=document.getElementById("Nim")
var addres=document.getElementById("addres")
var mydialog=document.getElementById("mydialog")
var closeIc=document.getElementById("closeIc")

var myarr=[]
if(localStorage.getItem("info")!=null){
    myarr=JSON.parse(localStorage.getItem("info"))
    display(myarr)
}

function add() {
    if(validationName()==true && validationUrl()==true){
    var obj={
        name:Nim.value,
        addrez:addres.value,
       
    }
    myarr.push(obj)
    localStorage.setItem("info",JSON.stringify(myarr))
    display(myarr)
    clearin()}
    else{
        mydialog.showModal()
    }
}
function display(myarr) {
var cartoona="";
    for (var i =0 ;i< myarr.length ;i++) {
        cartoona+=`<tr>
        <td>${i+1}</td>
        <td>${myarr[i].name}</td>

        <td><a href="https://${myarr[i].addrez}" target="-blank">
        <button class="btn btn-success"><i class="fa-regular fa-eye me-2"></i>Visit</button></a></td>
        <td><button class="btn btn-danger" onclick="deleete(${i})"><i class="fa-solid fa-trash-can me-2"></i>DELETE</button></td>
    </tr>`
    }
var bode=document.getElementById("tbodyy")
bode.innerHTML=cartoona
}
function clearin(){
    Nim.value=""
    addres.value=""
}
function deleete(ind) {
    
    myarr.splice(ind,1)
    localStorage.setItem("info",JSON.stringify(myarr))
    display(myarr)

}
document.addEventListener("click",function(){
    Nim.classList.replace("bluest","nonest");
    Nim.classList.replace("redest","nonest");
    addres.classList.replace("bluest","nonest");
    addres.classList.replace("redest","nonest");

})

closeIc.addEventListener("click",function(){
    mydialog.close()
})


    


Nim.addEventListener("input",function(){validationName()})
function validationName(){

    var regex=/^\w{3,}$/
    if(regex.test(Nim.value)==true){
        Nim.classList.replace("redest","bluest");
        
        return true;
    }else{

        Nim.classList.add("nonest","redest");
return false;
    }

}



addres.addEventListener("input",function(){validationUrl()})
function validationUrl(){

    var regex=/^\w+\.com$/
    console.log("hena")
    if(regex.test(addres.value)==true){
        console.log("if "+addres.value)
        addres.classList.replace("redest","bluest");
    return true;

    }else{
        addres.classList.add("nonest","redest");
        return false;

    }
   

}




