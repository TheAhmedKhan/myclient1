var btn=document.querySelector(".vbtn");
var content=document.querySelector(".audiocontainer");
let i=1;

btn.addEventListener("click", function clickEventHandler(){

    
    i++;
    if(i%2==0){
        content.style.display = "block";

    }else{
        content.style.display = "none";

    }
    
    
})

var btn1=document.querySelector(".nbtn");
var content1=document.querySelector(".naatcontainer");

btn1.addEventListener("click", function clickEventHandler(){

    
    i++;
    if(i%2==0){
        content1.style.display = "block";

    }else{
        content1.style.display = "none";

    }
    
    
})

var nav=document.querySelector(".navlinks");
var sticky=nav.offsetTop;
window.onscroll = function() {myFunction()};
function myFunction(){
    if(window.scrollY >= sticky){
        nav.classList.add("sticky");
        
    }else{
        nav.classList.remove("sticky");
    }
}