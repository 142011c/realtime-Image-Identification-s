function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    model=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ceXcnGXo_/model.json",modelLoaded);
}

function modelLoaded(){
    console.log("Model Loaded");
}

function draw(){
    image(video,0,0,400,400);
    model.classify(video,gotResult)
}

function gotResult(error,results){
  if(error){
      console.error(error);
  }  
  else{
      console.log(results);
      document.getElementById("span1").innerHTML=results[0].label;
      document.getElementById("span2").innerHTML=results[0].confidence.toFixed(3);
  }
}