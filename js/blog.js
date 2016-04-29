var Firebase = require("firebase");

var ref = new Firebase("https://crackling-heat-5677.firebaseio.com/");

ref.authWithPassword({
  email    : "dorothyichang@gmail.com",
  password : "Starbucks123"
}, function(error, authData) { /* Your Code */ }, {
  remember: "sessionOnly"
});

$('.loginbtn').on('click', function() {
  // Setup drop down menu
  $('.dropdown-toggle').dropdown();
 
  // Fix input element click problem
  $('.dropdown input, .dropdown label').click(function(e) {
    e.stopPropagation();
  });
});