

var userOfSite = "User name";
//var user = "Admin";

function selectUser() {
    if(userOfSite == "Admin") {
        document.getElementById("close1").style.display = "block";
        document.getElementById("close2").style.display = "block";
        document.getElementById("close3").style.display = "block";
    }

}

function changerEtatCharge(button) {
    var img;
    if(button == 1){
        img = document.getElementById("img1");
    }
    else if(button == 2){
        img = document.getElementById("img2");
    }
    else{
        img = document.getElementById("img3");
    }
    if(img.src.match("images/rouge.png")){
        img.src = "images/vert.png";
    }
    else {
        img.src = "images/rouge.png";
    }
}