// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modalLanscape = document.getElementById("myModal-lanscape");
var ModalLanscape = document.getElementById("Modal-lanscape");
var ModalLanscape5 = document.getElementById("Modal-lanscape5");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var modalImg = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var myImgLanscape = document.getElementById("myImg-lanscape");
var modalImgLanscape = document.getElementById("img-lanscape");
var myImgLanscape1 = document.getElementById("myImg-lanscape1");
var myImgLanscape2 = document.getElementById("myImg-lanscape2");
var myImgLanscape3 = document.getElementById("myImg-lanscape3");
var myImgLanscape4 = document.getElementById("myImg-lanscape4");
var myImgLanscape5 = document.getElementById("myImg-lanscape5");
var ImgLanscape = document.getElementById("lanscape");
var ImgLanscape5 = document.getElementById("lanscape5");

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
img3.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
  }
img4.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
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
myImgLanscape5.onclick = function(){
  ModalLanscape5.style.display = "block";
  ImgLanscape5.src = this.src;
  }
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

var span = document.getElementsByClassName("close3")[0];

span.onclick = function() { 
    modal2.style.display = "none";
}

var span = document.getElementsByClassName("close-lanscape")[0];

span.onclick = function() { 
    modalLanscape.style.display = "none";
}

var span = document.getElementsByClassName("close1")[0];

span.onclick = function() { 
    ModalLanscape.style.display = "none";
}

var span = document.getElementsByClassName("close2")[0];

span.onclick = function() { 
    ModalLanscape5.style.display = "none";
}