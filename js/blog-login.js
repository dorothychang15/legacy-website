require(['https://cdn.firebase.com/js/client/2.4.2/firebase.js'], function (firebase) {});

var ref = new Firebase("https://crackling-heat-5677.firebaseio.com/");

ref.authWithPassword({
  email    : "dorothyichang@gmail.com",
  password : "Starbucks123"
}, function(error, authData) { }, {
  remember: "sessionOnly"
});

$("#loginbtn").on("click", function (e) {
	$("#logincontainer")[0].style.visibility="hidden";
	$("#postcontainer")[0].style.visibility="visible";
	e.preventDefault();
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
	console.log("post saved");
});
