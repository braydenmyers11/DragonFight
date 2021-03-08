var wrap = document.body.querySelector(".wrapper");
var dragonhealth = 10;
var humanhealth = 5;
var fight = prompt("How much damage would you like to do between 1 and 5")

while(dragonhealth > 10 ||humanhealth > 5){
  dragonhealth - (fight - Math.floor(Math.random() * 5) + 1)
  
  var fight = prompt("How much damage would you like to do between 1 and 5")
}
wrap.innerHTML="You win!";