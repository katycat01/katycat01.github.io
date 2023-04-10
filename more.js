const time = new Date().getHours();
let greet;
if(time < 12){
    greet = "Morning.";
} else if(time < 20){
    greet = "Evening.";
} else {
    greet = "Night.";
}
document.getElementById("demo").innerHTML = greet;

function on(popupId) {
    document.getElementById(popupId).style.display = "block";
    document.body.classList.add("front-active");
  }
  
function off(popupId, event) {
  const overlay = document.getElementById(popupId);
  if (event.target === overlay) {
      overlay.style.display = "none";
      document.body.classList.remove("front-active");
    } 
}

const video = document.getElementById("myVideo");

video.currentTime = 203;

