document.getElementById("open-popup-btn").addEventListener("click",function(){
  document.getElementById("open-popup-btn").style.display = "none";
  document.getElementsByClassName("popup")[0].classList.add("active");
});
 
document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
  document.getElementById("open-popup-btn").style.display = "block";
  document.getElementsByClassName("popup")[0].classList.remove("active");
});


document.getElementById("open-popup-btn1").addEventListener("click",function(){
  document.getElementById("open-popup-btn1").style.display = "none";
  document.getElementsByClassName("popup1")[0].classList.add("active");
});
 
document.getElementById("dismiss-popup-btn1").addEventListener("click",function(){
  document.getElementById("open-popup-btn1").style.display = "block";
  document.getElementsByClassName("popup1")[0].classList.remove("active");
});