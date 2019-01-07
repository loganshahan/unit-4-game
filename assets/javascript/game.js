var randomNumber = "";
var wins = 0;
var losses = 0;
var totalScore = 0;


randomNumber = Math.floor(Math.random() * 102) + 19;
// console.log(randomNumber)
$("#random").html("Random Number: " + randomNumber);



for(i = 0; i < 4; i++){
    var random = Math.floor(Math.random() * 11) + 1;
    // console.log(random);
    var crystal = $("<div>");
        crystal.attr({
            "class": "crystal-images",
            "data-random": random,
            
            
        });
    $("#crystals").append(crystal);
              
};

$(".crystal-images").on('click', function (){
        // console.log($(this).attr("data-random"));

    var num = parseInt($(this).attr("data-random"));
    totalScore += num;
    console.log(num, " +" ,totalScore)
});

