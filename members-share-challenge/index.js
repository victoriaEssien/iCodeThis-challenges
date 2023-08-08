
const modal = document.querySelector("#myModal")
const send_btn = document.querySelector("#send_btn")

var span = document.getElementsByClassName("close")[0];

send_btn.onclick = function() {
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