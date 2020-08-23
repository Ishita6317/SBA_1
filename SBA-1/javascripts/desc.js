var i = 0;
var images = ["./images/place1.jpg", "./images/place2.jpg"];   
var time = 2000;

function changeImg(){

console.log("Function cla",i)
document.slide.src = images[i];

if(i < images.length - 1){
  i++; 
} else { 
    i = 0;
}

setTimeout("changeImg()", time);

}
changeImg();