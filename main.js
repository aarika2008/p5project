function preload(){
}

function setup(){
    Canvas=createCanvas(640,480);
    Canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    fill('#00FF00');
    stroke('#00FFFF');
    rect(60,40,500,15);
    rect(60,425,500,15);
    rect(45,40,15,400);
    rect(585,40,15,400);

    fill('#00FFFF');
    stroke('#00FF00');
    circle(50,50,80);
    circle(590,50,80);
    circle(50,430,80);
    circle(590,430,80);
    image(video,160,120,300,250);
}

function take_snapshot(){
    save('student.jpg');
}