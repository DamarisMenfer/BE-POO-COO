
go('land');

$routeProvider.when('/land', {
    templateUrl: 'login.html',
    controller: 'mainCtrl'
});

app.controller('mainCtrl', function($scope) {

});
var user = "User name";

//document.getElementById("username").innerHTML = user;

function test(){
  var styleCharge = document.getElementById("charges-menu");
  if (styleCharge.style.display === "none") {
    styleCharge.style.display = "block";
  } else {
    styleCharge.style.display = "none";
  }
}

var charges = [];

function getCharges() {
  charges.concat("Charge 1");
  charges.concat("Charge 2");

}

function loginExecute() {
    window.location.replace("https://www.w3schools.com");
}

