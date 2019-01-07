var randomNumber = "";
var wins = 0;
var losses = 0;
var totalScore = 0;


var startGame = function(){

    $("#crystals").empty();

var images = [
    'https://i.imgur.com/lhkq4cK.png',
    'https://ih1.redbubble.net/image.525148917.0642/flat,1000x1000,075,f.u3.jpg',
    'https://ih1.redbubble.net/image.524643622.6476/flat,550x550,075,f.u3.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQM-y34rL877z0kCvKZt24aFqSSXABPF5Vm3Z0ALfaoao8nnbvw'
]    

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
            // "id": "crystal"+i,
        });
        crystal.css({
            "background-image": "url('" + images[i] + "')",
            "background-size": "cover",
        })
        // crystal.html(random);
    $("#crystals").append(crystal);
    
              
}};

startGame();

$(document).on('click', ".crystal-images", function (){
        console.log($(this).attr("id"));

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




