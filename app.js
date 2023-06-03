var gallery = document.getElementById("gallery");
var whatsapp = document.getElementById("whatsapp");
var review = document.getElementById("review");
var popform = document.getElementById("popform");
var userprofilesv = document.getElementById("userprofiles");
var lhv = document.getElementById("lhv");
var pg = document.getElementById("pg");





var mainoption = document.getElementById("mainoption");
var linehide = document.getElementById("linehide-products");
var linehideservice = document.getElementById("linehide-services");


//////////////////////////////////////all price will be updated here//////////////////

var price = document.getElementById("price");
var base = 10000;
price.innerHTML = base;
var customdelay = 300;


mainoption.addEventListener("input", function () {

  if (mainoption.value == "1") {
    linehide.style.display ="none";
    linehideservice.style.display ="none";
    base = 10000;
    price.innerHTML = base;

    pg.classList.add("disabled");
  }

  else if (mainoption.value == "2") {
    linehide.style.display ="none";
    timeout = setTimeout(function () {
      linehideservice.style.display ="flex";
    }, customdelay );

    base = 13000;
    price.innerHTML = base;

    pg.classList.remove("disabled");
  }

  else if (mainoption.value == "3") {
    linehideservice.style.display ="none";

    timeout = setTimeout(function () {
      linehide.style.display ="flex";
    }, customdelay );
    base = 15000;
    price.innerHTML = base;

    pg.classList.remove("disabled");


   
  }
  else if (mainoption.value == "4") {
    linehide.style.display ="none";
    linehideservice.style.display ="none";
    base = 10000;
    price.innerHTML = base;
    pg.classList.add("disabled");
    
   
  }
  else if (mainoption.value == "5") {
    linehide.style.display ="none";
    linehideservice.style.display ="none";
    base = 10000;
    price.innerHTML = base;
    pg.classList.add("disabled");
   

   
  }

  




});











var a = 600 ;    // price of each service










function registerClick(elementId) {
  if (elementId.classList.contains("selected")) {
    elementId.classList.remove("selected");
    price.innerHTML = parseInt(price.innerHTML) - a;
    price.innerHTML.toLocaleString("en-US");
    


    


    
  } else if (!elementId.classList.contains("selected")) {
    elementId.classList.add("selected");
    price.innerHTML = parseInt(price.innerHTML) + a;
  

  }
}



if (mainoption.value =="3" ) {
  document.querySelector("#line-hide").style.display = "none";
}






