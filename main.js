var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

blockimage_object = "";

function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg", function(img){
        blockimage_object = img;

        blockimage_object.scaleToWidth(700);
        blockimage_object.scaleToHeight(510);
        blockimage_object.set({
            top:0,
            left:0
        });

        canvas.add(blockimage_object);
    });
}

function playSound(){
	x.play()
}
