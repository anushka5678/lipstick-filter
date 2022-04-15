noseX=0;
noseY=0;
function preload(){
lipstick= loadImage('https://i.postimg.cc/7YP4VqCT/Lipstick-kiss-print-isolated-on-transparent-PNG-removebg-preview.png')
}

function setup(){
    canvas= createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('posenet is initialized');
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
         console.log(" nose x = " + noseX);
         console.log(" nose y = " + noseY);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(lipstick, noseX-20, noseY+17, 45, 30);
}


function take_snapshot(){
    save('lipstick_image.png');
}