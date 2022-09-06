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
    

             

       // dogeTwo click closing
      });  
// document ready function closing
  });