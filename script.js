main()
var IMG_SOURCE = "dog.png";

function main(){

}

function getArray(){
    var canvas = document.createElement('canvas');
    canvas.width = IMG_SOURCE.width;
    canvas.height = IMG_SOURCE.height;
    canvas.getContext('2d').drawImage(IMG_SOURCE, 0, 0, IMG_SOURCE.width, IMG_SOURCE.height);
    var pixelData = canvas.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;
}