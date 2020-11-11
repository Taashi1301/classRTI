function preload(){

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Qb2la4abO/model.json", modelLoaded);
}

function modelLoaded(){
    console.log("Model is Loaded");
}

function draw(){
    image(video, 0, 0, 300, 300);
    classifier.classify(video, Gotresults);
}
function Gotresults(error, results){
    if (error){
        console.log("error")
    }
    if (results){
        console.log(results);
        object = results[0].label;
        console.log(object);
        accuracy = results[0].confidence.toFixed(3)*100;
        console.log(accuracy);
        document.getElementById("objectname").innerHTML=object;
        document.getElementById("accuracy").innerHTML=accuracy + " %";
    }
}