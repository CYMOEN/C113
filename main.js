function preload() {

}

function setup(){
    canvas = createCanvas(700, 500);
    canvas.center();
    canvas.position(400, 150)
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 45, 50, 450, 350);

    fill(255, 166, 0);
    stroke(255, 166 ,0);

rect(20, 20, 20, 380);
rect(20, 380, 500, 20);
rect(20, 20, 500, 20);
rect(500, 20, 20, 380);

    fill(0,0,0);
    stroke(0,0,0);

circle(30, 30, 50);
circle(30, 380, 50);
circle(500, 30, 50);
circle(500, 380, 50);
}

function take_snapshot() {
    save("portraitpicture.png")
}