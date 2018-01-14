function changerEtatCharge(button) {
    var img;
    if(button == 1){
        img = document.getElementById("img1");
    }
    else if(button == 2){
        img = document.getElementById("img2");
    }
    else if(button == 3){
        img = document.getElementById("img3");
    }
    else if(button == 4){
        img = document.getElementById("img4");
    }
    else if(button == 5){
        img = document.getElementById("img5");
    }

    if(img.src.match("images/rouge.png")){
        img.src = "images/vert.png";
    }
    else {
        img.src = "images/rouge.png";
    }
}