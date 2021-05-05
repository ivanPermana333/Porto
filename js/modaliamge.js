// Get the modal
var modal = document.getElementById("myModal");
var modalLanscape = document.getElementById("myModal-lanscape");
var ModalLanscape = document.getElementById("Modal-lanscape");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var modalImg = document.getElementById("img01");
var myImgLanscape = document.getElementById("myImg-lanscape");
var modalImgLanscape = document.getElementById("img-lanscape");
var myImgLanscape1 = document.getElementById("myImg-lanscape1");
var myImgLanscape2 = document.getElementById("myImg-lanscape2");
var myImgLanscape3 = document.getElementById("myImg-lanscape3");
var myImgLanscape4 = document.getElementById("myImg-lanscape4");
var ImgLanscape = document.getElementById("lanscape");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
img1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
myImgLanscape.onclick = function(){
modalLanscape.style.display = "block";
modalImgLanscape.src = this.src;
}
myImgLanscape1.onclick = function(){
ModalLanscape.style.display = "block";
ImgLanscape.src = this.src;
}
myImgLanscape2.onclick = function(){
ModalLanscape.style.display = "block";
ImgLanscape.src = this.src;
}
myImgLanscape3.onclick = function(){
ModalLanscape.style.display = "block";
ImgLanscape.src = this.src;
}
myImgLanscape4.onclick = function(){
ModalLanscape.style.display = "block";
ImgLanscape.src = this.src;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

var span = document.getElementsByClassName("close-lanscape")[0];

span.onclick = function() { 
    modalLanscape.style.display = "none";
}

var span = document.getElementsByClassName("close1")[0];

span.onclick = function() { 
    ModalLanscape.style.display = "none";
}