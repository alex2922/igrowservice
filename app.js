var gallery = document.getElementById("gallery");
var whatsapp = document.getElementById("whatsapp");
var review = document.getElementById("review");




var price = document.getElementById("price");

price.innerHTML = x+1;





function registerClick(elementId) {
  if (elementId.classList.contains("selected")) {
    elementId.classList.remove("selected");
    
  } else if (!elementId.classList.contains("selected")) {
    elementId.classList.add("selected");

  }
}


