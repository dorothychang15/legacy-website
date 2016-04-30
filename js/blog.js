require(['https://cdn.firebase.com/js/client/2.4.2/firebase.js'], function (firebase) {});

var ref = new Firebase("https://crackling-heat-5677.firebaseio.com/");

ref.on("child_added", function (snapshot) {
  var data = snapshot.val();
  var title = data.title;
  var text = data.text;
  var textElement = $("<li>");
  var titleElement = $("<h3></h3>")
  titleElement.text(title);
  textElement.text(message).prepend(titleElement);
  $("#blogposts").append(textElement);
});