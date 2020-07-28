



function imageSelector(){
  var randomNumber = Math.floor(Math.random() * 6 )+1;


  var randomDiceImage = "dice" + randomNumber +".png";

  return  "images/"+randomDiceImage;
}

randomNumber1 =imageSelector();

randomNumber2 =imageSelector();




document.querySelectorAll("img")[0].setAttribute("src",randomNumber1)
document.querySelectorAll("img")[1].setAttribute("src",randomNumber2)


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML ="Player 1 wins!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML ="Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML ="Draw !";
}
