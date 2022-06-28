Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90,
})
camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/RvXTRQaHj/model.json",modelLoaded);

function modelLoaded(){


    console.log('Model Loaded!');
}
function speak(){
    var synth = window.speechSynthesis;
    var speak_data = "the prediction is"+prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}


function check(){
    img = document.getElementById('captured_image'); 
    classifier.classify(img, gotResults);
 }
 
 
 function gotResults(error, results){
     if(error){
         console.error(error);
     }
         else{
            document.getElementById("result_emotion_name").innerHTML = results[0].label; 
            prediction = results[0].label;
            speak();
            if(result[0].label == "Good"){
             document.getElementById("update_emoji").innerHTML = "&#128077";
            }
             if(result[0].label == "Bad"){
                document.getElementById("update_emoji").innerHTML = "&#128078";

            }
             if(result[0].label == "Victory"){
                document.getElementById("update_emoji").innerHTML = "&#9996";
                
            }
         }
     }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 