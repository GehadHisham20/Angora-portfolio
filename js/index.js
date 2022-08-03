let navbar= document.querySelector(".navbar");
let navbarLink=document.querySelectorAll(".navbar-light .navbar-nav .nav-link ");
let navPadding=document.querySelector(".nav-padding");
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if(currentScrollPos>screen.height){
    navbar.style.backgroundColor ="white";
    navbar.style.top ="0px";
    navbarLink.forEach(element=>{
        element.style.color="#000";
    })
    navPadding.style.padding="1rem 10rem"
  }
  else if (prevScrollpos < currentScrollPos) {
    navbar.style.top ="-100px"; 
  } 
  else{
    navbar.style.backgroundColor ="transparent"
    navbar.style.top ="0px";
    navbarLink.forEach(element=>{
        element.style.color="white";
    })
    navPadding.style.padding="2rem 10rem"
  }
  prevScrollpos = currentScrollPos;
}