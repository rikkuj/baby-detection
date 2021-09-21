img = "";
status = "";
objects = [];

function setup(){
canvas = createCanvas(380,380);
canvas.center();

document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload(){
    img = loadImage('bsabby.jpg');
}

function draw(){
    image(img,0,0,380,380);
    fill("#FF0000");
    text("baby",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,335,310);

    }

function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(video, gotResult);
}
function gotResult(error, results){
    if (error){
        console.log(error);
    }
    console.log(results)
    objects = results;
}
