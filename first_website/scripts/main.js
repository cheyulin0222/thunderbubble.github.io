var myImg = document.querySelector("img");

myImg.onclick = function() {
  var mySrc = myImg.getAttribute("src");

  if (mySrc === "images/cat1.jpeg") {
    myImg.setAttribute("src", "images/cat2.jpg");
  }
  else {
    myImg.setAttribute("src", "images/cat1.jpeg");
  }
}
