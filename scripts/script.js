$(document).ready(function() {
  
  // click on img and get message
  
  $("#dogeOne").click(function(){
    $("#outputDiv").hide();
    
    console.log("user clicked doge one"); 
    $("#outputMsg").text("you lose not wow");
    $("#outputDiv").toggle();
    
      // dogeOne click closing
       });
 
    
  $("#dogeTwo").click(function(){
    $("#outputDiv").hide();
    console.log("user clicked doge two");  
    $("#outputMsg").text("you has WOW!!");
    $("#outputDiv").toggle();
    var div = $("#dogeTwo");
    div.animate({height: "400px", opacity: "0.4"}, "slow");
    div.animate({width: "500px", opacity: "0.8"}, "slow");
    div.animate({height: "450px", opacity: "0.4"}, "slow");
    div.animate({width: "750px", opacity: "1"}, "slow");
    
    

       // dogeTwo click closing
      });  
// document ready function closing
  });