require(['https://cdn.firebase.com/js/client/2.4.2/firebase.js'], function (firebase) {});

var ref = new Firebase("https://crackling-heat-5677.firebaseio.com/");

// var userField = $("#loginemail");
// var passField = $("#loginpassword");

// $("#loginbtn").on("click", function () {
//   var user = new String(userField.val()).valueOf();
//   var password = new String(passField.val()).valueOf();
//   if (user === (new String("dorothyichang@gmail.com").valueOf()) && password === (new String("password").valueOf())) {
//     console.log("logged in!");

//     ref.authWithPassword({
//       email    : "dorothyichang@gmail.com",
//       password : "password"
//     }, function(error, authData) { }, {
//       remember: "sessionOnly"
//     });

//     $("#logincontainer")[0].style.visibility="hidden";
//     $("#postcontainer")[0].style.visibility="visible";
//     e.preventDefault();
//   }
// });


$("#loginbtn").on("click", function (e) {
  $("#logincontainer")[0].style.visibility="hidden";
  $("#postcontainer")[0].style.visibility="visible";
  e.preventDefault();
  ref.authWithPassword({
      email    : "dorothyichang@gmail.com",
      password : "password"
    }, function(error, authData) { }, {
      remember: "sessionOnly"
    });
});

var titleField = $("#titleinput");
var textField = $("#textinput");

$("#postbtn").on("click", function (e) {
  var title = titleField.val();
  var text = textField.val();
  ref.push({title: title, text: text});
  titleField.val('');
  textField.val('');
  $("#logincontainer")[0].style.visibility="hidden";
  $("#postcontainer")[0].style.visibility="visible";
  e.preventDefault();
  $("#successmessage")[0].style.visibility="visible";
});
