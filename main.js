var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

function new_image() {
    fabric.Image.fromURL("BirthdayImage.jpg", function (Img) {
        b_img_obj = Img;
        b_img_obj.scaleToWidth(700);
        b_img_obj.scaleToHeight(510);
        b_img_obj.set({
            top: 0,
            left: 0
        });
        canvas.add(b_img_obj);
    });

}

function playSound() {
    x.play();
}