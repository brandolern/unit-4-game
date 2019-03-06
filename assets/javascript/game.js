$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var counter = 0;


    var images = ["blue.jpg", "orange.jpg", "red.jpg", "green.jpg"];

    var targetNumber = Math.floor(Math.random() * 101) + 19;

    var updateInfo = function () {
        $("#randomNumber").text(targetNumber);
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
        $("#score").text(counter);
    }



    for (i = 0; i < images.length; i++) {

        var crystalValue = Math.floor(Math.random() * 11) + 1;

        var crystalImage = $("<img>");

        crystalImage.addClass("crystal-image");
        crystalImage.attr("id", "image" + [i])
        crystalImage.attr("src", "assets/images/" + images[i]);
        crystalImage.attr("data-crystalvalue", crystalValue);
        $("#crystals").append(crystalImage);
    }


    updateInfo();

    $(".crystal-image").on("click", function () {
        var crystalNumber = ($(this).attr("data-crystalvalue"))
        var crystalNumber = parseInt(crystalNumber);

        counter += crystalNumber;


        if (counter === targetNumber) {
            wins++;
            counter = 0;
            $("#winText").css("display", "block");
            $("#winText").text("You won!!");
            targetNumber = Math.floor(Math.random() * 101) + 19;

            $(this).removeAttr("data-crystalvalue");

            for (i = 0; i < images.length; i++) {
                $("#image" + [i]).attr("data-crystalvalue", Math.floor(Math.random() * 11) + 1);
            }

            updateInfo();

        } else if (counter >= targetNumber) {

            losses++;
            counter = 0;

            $("#winText").css("display", "block");
            $("#winText").text("You lost :(");

            targetNumber = Math.floor(Math.random() * 101) + 19;

            $(this).removeAttr("data-crystalvalue");

            for (i = 0; i < images.length; i++) {
                $("#image" + [i]).attr("data-crystalvalue", Math.floor(Math.random() * 11) + 1);
            }

            updateInfo();

        }
        updateInfo();

    });

})