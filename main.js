
camera = document.getElementsById("camera");

Webcam.set({
    width:350,
    height:300,
    image_format : 'pgn',
    pgn_quality:90
});


Webcam.attach( '#camera' );


function take_snapshot()
{
     Webcam.snap(function(data_uri) {
        doccument.getElementsById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
     });
}

console.log('nl5 version:', ml5.version);

classifier = n15.imageClassifier('ttps://teachablemachine.withgoogle.com/models/ke7jF3Xo7/',modelLoaded);

    function modelLoaded() {
        console.log('Model Loaded!');
    }

    function check()
    {
        img = document.getElementById('captured_image')
        classifier.classify(img. gotResult);
    }


function gotResult(error, results) (
    if (error) {
        console.error(error);
    }    else {
        console.log(results);
        document.getElementsById("result_object_name").innerHTML = results[0].label;
        document.getElementsById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
)