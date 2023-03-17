$(document).ready(function() {
  $('.experiment-image-1').click(function() {
    $('.experiment-image-2').fadeToggle("slow");
    // Alternative animation for example
    // slideToggle("fast");
  });
});

function animationIn() {
  document.getElementById("logo").src =
    "https://assets.codepen.io/316293/kenneth-latham-logo-off.svg";
  document.getElementById("logo").alt = "animationIn";
}

function animationOut() {
  document.getElementById("logo").src =
    "https://assets.codepen.io/316293/kenneth-latham-logo-on.svg";
  document.getElementById("logo").alt = "animationOut";
}