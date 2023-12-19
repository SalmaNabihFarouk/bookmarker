
var inputname =document.getElementById("name");
var inputurl =document.getElementById("url");


var arr=[];

if(localStorage.getItem("products")!=null){
 
arr= JSON.parse(localStorage.getItem("products"));
display(arr);
}

function add(){

// document.getElementById("url").classList.remove("green solid 3px");
  // inputname.style.border="none";
  // inputurl.style.border="none";



 if((validationname()==true&&validationurl()==true)) {
  // document.getElementById("name").classList.style.border.remove("green solid 3px");

  inputname.style.border="none";
  inputurl.style.border="none";
  var product ={
    name:inputname.value ,
    
    
    url:inputurl.value
  }


arr.push(product);
localStorage.setItem("products", JSON.stringify(arr)); 
display(arr);
clearform ();
 }


else{
  inputname.style.border="none";
  inputurl.style.border="none";
alert("Site name must contain at least 3 characters Site URL must be a valid one");

}


}
function clearform(){
  inputname.value="";
  inputurl .value="";
}
  function visit(i){
window.open(arr[i].url);


  }
  


 function display(arr){
  cartona=``;
for(var i=0;i<arr.length;i++){
cartona+=`<tr>


<td>${i+1}</td>
    <td>${arr[i].name}</td>
   
   
    <td><button  onclick="visit(${i})" class="btn   btn-outline-dark">  <i class="fa-solid fa-eye"></i>visit${i}</button></td>
    <td><button onclick="deleteproduct(${i})" class="btn btn-danger"  > <i class="fa-solid fa-trash"></i>delet
  
    </button></td>
        </tr>`
 
}
document.getElementById("tablebody").innerHTML=cartona;
}

function deleteproduct(index){
  arr.splice(index,1);
  localStorage.setItem("products", JSON.stringify(arr)); 
  display(arr);
  }

  function validationname(){
    var x=/^[A-Z][a-z]{3,10}$/;
 
    if( x.test(inputname.value)==true){
      
  inputname.style.border="green solid 3px";

return true;
    }
    else{
      inputname.style.border="red solid 3px";
     
return false;
    }
   
 


  }
 function validationurl(){
  urlRegex=/^(https?|ftp):\/\/(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/;

if (urlRegex.test(inputurl.value)){
  inputurl.style.border="green solid 3px";
  return true;
}
else{
  inputurl.style.border="red solid 3px";

  return false;
}
 }


  
  //' var x;
  // function seee(){
  //   x=  window.open("https://www.w3schools.com");
  //   console.log(x);
  // }
