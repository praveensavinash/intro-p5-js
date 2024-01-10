function preload() {

}


function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
  
    video = createCapture(VIDEO);
    video.hide();


    tint_color = "";
}


function draw() {
    image(video, 180, 100, 250, 250);
    tint(tint_color);
    circle(50,50,100);
    circle(600,50,100);
    circle(600,450,100);
    circle(50,450,100);
    rect(100,20, 450, 55);
    rect(100,420, 450, 55);
    rect(30,100, 55, 305);
    rect(575,100, 55, 305);
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}

