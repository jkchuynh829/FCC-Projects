$(function() {

    var buzzer = $("#buzzer")[0];
    var sessionCount = parseInt($("#session").html());
    var breakCount = parseInt($("#break").html())
    var time = parseInt($("#time").html());

    $("#start").click(function() {
        sessionCount *= 60;
        time = sessionCount;
        $(".title").html("DO WORK!");
        $(".settings").css("visibility", "hidden");
        $("#start").css("visibility", "hidden");
        var clock = setInterval(timer, 1000);

        function timer() {
            time--;
            if (time % 60 >= 10) {
                $("#time").html(Math.floor(time / 60, 2) + ":" + time % 60);
            } else {
                $("#time").html(Math.floor(time / 60, 2) + ":" + "0" + time % 60);
            }
            if (Number(time) === 0) {
                clearInterval(clock);
                buzzer.play();
                $(".tomato").effect("shake");
                breakCount *= 60;
                time = breakCount;
                $(".title").html("Break Time!");
                var breakClock = setInterval(breakTimer, 1000);
            }

            function breakTimer() {
                time--;
                if (time % 60 >= 10) {
                    $("#time").html(Math.floor(time / 60, 2) + ":" + time % 60);
                } else {
                    $("#time").html(Math.floor(time / 60, 2) + ":" + "0" + time % 60);
                }
                if (Number(time) === 0) {
                    clearInterval(breakClock);
                    buzzer.play();
                    $(".tomato").effect("shake");
                    time = sessionCount;
                    $("#time").html(sessionCount / 60 + ":0" + sessionCount % 60);
                    $(".settings").css("visibility", "initial");
                    $("#start").css("visibility", "initial");
                    $(".title").html("pomodoro");
                }
            }
        }

    });
    $("#sessionMin").click(function() {
        if (sessionCount > 5) {
            sessionCount -= 5;
            console.log(sessionCount);
            sessionCount = ("0" + sessionCount).slice(-2);
            $("#session").html(sessionCount);
            sessionCount = Number(sessionCount);
        }
    });
    $("#sessionAdd").click(function() {
        sessionCount += 5;
        console.log(sessionCount);
        sessionCount = ("0" + sessionCount).slice(-2);
        $("#session").html(sessionCount);
        sessionCount = Number(sessionCount);
    });
    $("#breakMin").click(function() {
        if (breakCount > 5) {
            breakCount -= 5;
            console.log(breakCount);
            breakCount = ("0" + breakCount).slice(-2);
            $("#break").html(breakCount);
            breakCount = Number(breakCount);
        }
    });
    $("#breakAdd").click(function() {
        breakCount += 5;
        console.log(breakCount);
        breakCount = ("0" + breakCount).slice(-2);
        $("#break").html(breakCount);
        breakCount = Number(breakCount);
    });


});
