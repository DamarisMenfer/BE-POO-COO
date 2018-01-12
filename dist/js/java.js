
var user = "Admin";

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

function changePage(page) {
    if(page == 0){
        document.location.href = "admin_gestionUtilisateurs.html";
    }
    else if(page == 1){
        document.location.href = "admin_consommation.html";
    }
    else if(page == 2){
        document.location.href = "admin_etat_des_charges.html";
    }
    else if(page == 3){
        document.location.href = "admin_groupe_charges.html";
    }
    else if(page == 4){
        document.location.href = "admin_interrupteur.html";
    }
    else if(page == 5) {
        document.location.href = "admin_categorie.html";
    }
    else if(page == 6){
        document.location.href = "consommation.html";
    }
    else if(page == 7){
        document.location.href = "etat_des_charges.html";
    }
    else if(page == 8){
        document.location.href = "groupe_charges.html";
    }
    else if(page == 9){
        document.location.href = "interrupteur.html";
    }
    else if(page == 10) {
        document.location.href = "categorie.html";
    }
}

function connectUser() {
    user = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;

    if (user != "" && password != "") {
        if(user.match("Admin")){
            changePage(1);
        }
        else {
            changePage(6);
        }

    }
}

