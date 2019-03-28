/* HTML: 3 links to 3 different animals: when user clicks a link, that animal's infor appears. When another link is clicked, current animal dissappears and new animal appears.

/* 1. Ask user which aninmal
2. Up click show paragraph and img for selected
3. click next animal removes class of previous animal and show next animal

/* Click on header link and our div*/

$(document).ready(function(event) {
  var choiceTurtle = $ ("#turtleLink").click(function(){
    (".turtle").val();

  var choiceFox = $ ("#foxLink").click(function(){
    (".fox").val();

  var choiceBear = $ ("#bearLink").click(function(){
      (".bear").val();

  event.preventDefault();
  });

if (choiceTurtle === $(".turtle").val(){
  $(".turtle").show();
}
