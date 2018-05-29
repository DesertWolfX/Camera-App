
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.addEventListener('DOMContentLoaded', function () {
            document.querySelector('button').addEventListener('click', snapImage);
        });
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        console.log('deviceready');
    },
    
};

app.initialize();

var picture = document.getElementById('picture');
var geolocation = document.getElementById('geolocation');
var Latitude;
var Longitude;

// This function will capture the image
//
function snapImage() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
        enableHighAccuracy: true
    })
}

// Success callback for geolocation
//
var onSuccess = function(position) {
    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;
    navigator.camera.getPicture(onCameraSuccess, onCameraError);
}

// Error callback for geolocation
//
function onError(error) {
    console.log(error.message);
}

// Success callback for snapImage
//
var onCameraSuccess = function(image) {
    picture.src = 'data:image/png;base64,' + image;
    geolocation.innerHTML = 'Latitude: ' + Latitude + ', Longitude' + Longitude;
}

// Error callback for snapImage
//
var onCameraError = function(error) {
    console.log(error.message);
}