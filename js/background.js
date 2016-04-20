$(document).ready(function() {
 
 spectrum();
 
 function spectrum(){
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    $('body').animate( { backgroundColor: hue }, 5000);
    spectrum();
 }
 
});