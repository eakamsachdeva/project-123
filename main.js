noseX=0;
noseY=0;
difference=0;
leftWristx=0;
rightWristX=0;



function setup(){
    video=createCapture(VIDEO);
video.size(550,500);

canvas=createCanvas(550,550);
canvas.position(560,150);
poseNet=ml5.poseNet(video,modelLoded);
poseNet.on("pose",gotPoses);
}
function draw(){
    background("#696969");
    textSize(difference);
    fill("#2EFFFF");
    text("Eakam",50,400);
}
function modelLoded(){
    console.log("model is loded");

}
function gotPoses(results){
    if(results.length>0){
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}