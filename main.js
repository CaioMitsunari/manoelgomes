dif=0
punhoDireitoX=0
punhoEsquerdo=0

function setup(){
    video=createCapture(VIDEO)
    video.size(550,500)

    canvas=createCanvas(550,550)
    canvas.position(560,160)

    poseNet=ml5.poseNet(video)
    poseNet.on("pose", gotPoses)
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
        punhoDireitoX=results[0].pose.rightWrist.x
        punhoEsquerdoX=results[0].pose.leftWrist.x
        dif=floor(punhoEsquerdoX-punhoDireitoX)                                                 
    }
} 

function draw(){
    background("#abcdef")
    document.getElementById("font_size").innerHTML="tamanho da fonte sera: "+dif+"px"
    textSize(dif)
    fill("#f90093")
    text("manoel gomes", 50, 400)
}