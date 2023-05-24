var gallery = document.getElementById("gallery");
var whatsapp = document.getElementById("whatsapp");
var review = document.getElementById("review");
var popform = document.getElementById("popform");
var userprofilesv = document.getElementById("userprofiles");
var lhv = document.getElementById("lhv");
var pg = document.getElementById("pg");





var mainoption = document.getElementById("mainoption");




var price = document.getElementById("price");

price.innerHTML = x+1;





function registerClick(elementId) {
  if (elementId.classList.contains("selected")) {
    elementId.classList.remove("selected");
    
  } else if (!elementId.classList.contains("selected")) {
    elementId.classList.add("selected");
  

  }
}



if (mainoption.value =="3" ) {
  document.querySelector("#line-hide").style.display = "none";
}
