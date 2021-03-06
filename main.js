Nose_X = 0;
Nose_Y = 0;
function preload(){
    Clown_Nose = loadImage('https://i.postimg.cc/Qx4TY3Q5/pixlr-bg-result-1.png');
}

function setup(){
    Canvas = createCanvas(500, 400);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.size(500, 400);
    Video.hide();
    poseNet = ml5.poseNet(Video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Model Loaded!");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        Nose_X = results[0].pose.nose.x - 35;
        Nose_Y = results[0].pose.nose.y - 30;
        console.log("Nose X: " + Nose_X);
        console.log("Nose Y: " + Nose_Y);
    }
}
function draw(){
    image(Video, 0, 0, 500, 400);
    fill(255, 200, 0);
    stroke(255, 200, 0);
    image(Clown_Nose, Nose_X, Nose_Y, 80, 50);
}
function Take_Snapshot(){
    save('FilterImage.png');
}