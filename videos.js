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