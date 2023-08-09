
const modal = document.querySelector("#myModal")
const link = document.querySelector("#link")

var span = document.getElementsByClassName("close-icon")[0];

link.onclick = function() {
    modal.style.display = "block";
}
  
  span.onclick = function() {
    modal.style.display = "none";
}
  
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}