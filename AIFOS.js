function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  var element = document.querySelector('.voice');
  window.addEventListener('scroll', function() {
    if (isInViewport(element)) {
      element.classList.add('animate-l');
    }
  });

  var element = document.querySelector('.keyboard');
  window.addEventListener('scroll', function() {
    if (isInViewport(element)) {
      element.classList.add('animate-l');
    }
  });
function toggleCommandDiv() {
    var x = document.getElementById("commandDiv");
    var y = document.getElementById("newsDiv");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
    }}
function toggleNewsDiv() {
  var x = document.getElementById("commandDiv");
  var y = document.getElementById("newsDiv");
      if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
      } else {
        y.style.display = "none";
      }}