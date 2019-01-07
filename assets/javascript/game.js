var randomNumber = "";
var wins = 0;
var losses = 0;
var totalScore = 0;


var startGame = function(){

    $("#crystals").empty();

randomNumber = Math.floor(Math.random() * 102) + 19;
// console.log(randomNumber)
$("#random").html("Random Number: " + randomNumber);
$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);



for(i = 0; i < 4; i++){
    var random = Math.floor(Math.random() * 11) + 1;
    // console.log(random);
    var crystal = $("<div>");
        crystal.attr({
            "class": "crystal-images",
            "data-random": random,
            
            
        });
        crystal.html(random);
    $("#crystals").append(crystal);
    
              
}};

startGame();

$(document).on('click', ".crystal-images", function (){
        // console.log($(this).attr("data-random"));

    var num = parseInt($(this).attr("data-random"));
    totalScore += num;
    $("#count").html(totalScore);
    // console.log(num, " +" ,totalScore)
    if(totalScore > randomNumber){
        losses--;
        $("#losses").html("Losses: " + losses);

        totalScore = 0;
        
        startGame();
    }
    else if(totalScore === randomNumber){
        wins++;
        $("#wins").html("Wins: " + wins);
        totalScore = 0;
        startGame();
    }
});




