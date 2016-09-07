$(function() {

    var modeXO = "X";
    var lastMove = [];

    $(".gameBoard").hide();
    $(".selectScreen").hide();

    //CHOOSE NUMBER OF PLAYERS
    $("#one").click(function() {
        console.log(this.id + " player mode begin");
        $(".selectScreen").show();
        $(".titleScreen").hide();
    });
    $("#two").click(function() {
        console.log(this.id + " player mode begin");
        $(".gameBoard").show();
        $(".titleScreen").fadeOut(100);
    });
    //SELECT X OR O
    $("#selectX").click(function() {
        console.log("PLAYER CHOOSES X: GO FIRST!");
        modeXO = "X"
        $(".gameBoard").show();
        $(".selectScreen").hide();
    });
    $("#selectO").click(function() {
        console.log("PLAYER CHOOSE O: WAIT YOUR TURN!");
        modeXO = "O"
        $(".gameBoard").show();
        $(".selectScreen").hide();
    });
    //GAMEBOARD
    $(".square").click(function() {
        $(this).html(modeXO);
        lastMove = [modeXO, this.id];
        console.log(lastMove);
        if (modeXO === "X") {
            modeXO = "O";
        } else {
            modeXO = "X";
        }
    });


});
