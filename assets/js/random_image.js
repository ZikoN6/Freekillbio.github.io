window.onload = displayImage;
var imagesArray = ["zaid.jpg"];

function displayImage() {
    var num = Math.floor(Math.random() * (imagesArray.length));
    document.getElementById("main_image1").src = "assets/img/animes/" + imagesArray[num];
}
