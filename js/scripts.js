/* user submit age in prompt (Enter age)
input < 5  Ride A  highlights div (par/image)
input < 10 Ride B highlights div (par/image) div2 (par2/image2)
input < 99 Ride C highlights div (par/image) div2 (par2/image2) div3 (par3/image3)
else > 100  Can't Ride  highlights div4 (par4)
*/

$(document).ready(function(age){
  var age = parseInt(prompt("Enter your age here"));

  if (age>=0  && age<=5) {
    $(".levelOne").addClass("levelOneBorder")

  }else if (age<=10){
    $(".levelTwo").addClass("levelTwoBorder")
    $(".levelOne").addClass("levelOneBorder")



  }else if (age<=99){
    $(".levelThree").addClass("levelThreeBorder")
    $(".levelTwo").addClass("levelTwoBorder")
    $(".levelOne").addClass("levelOneBorder")

  }else{
    $(".levelFour").addClass("levelFourBorder")

  }

});
