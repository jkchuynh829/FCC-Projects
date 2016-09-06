$(document).ready(function() {
  
  $("li").click(function() {
    // WHAT DID WE JUST CLICK?
    $(".expression").css("color", "rgba(0,0,0,1)");
    var val = $(this).text();
    var num = /\D/ig; // CONVERT OPERATORS
    // CLEAR
    if(val === "C") {
      $(".result").html("0.0");
      $(".expression").html("Clear").fadeOut(500);
      $(".expression").html("").fadeIn(500);
    }
    // CALCULATE
    else if(val === "=") {
      var expression = $(".expression").text();
      function math(str) {
        var regex = /\S/ig;
        var invalid = /(\D)\1+/ig;
        var invalid2 = /(\?|LOL)/ig;
        // SPLIT STRING AND FILTER OUT WHITE SPACE
        var str = str.split(' ').filter(function(e) {
          return e.match(regex) ? true : false;
        });
        // MAKE EVALUATABLE
        str = str.map(function(e) {
          if(e === "x") {
            e = "*";
            return e;
          } 
          else if(e === "PI") {
            e = Math.PI;
            return e;
          }
          else if(e === "?" || e === "LOL") {
            return e;
          }
          else {
            return e;
          }
        }).join('');
        
        console.log(str);
        if(str.match(invalid) || str.match(invalid2)) {
          return "Sorry!";
        }
        var result = eval(str);
        return result !== Infinity ? Math.round(result*10000000)/10000000 : "Error";
      }
      var answer = math(expression);
      // DEBUG
      console.log(math(expression));
      $(".expression").css("color", "rgba(0,0,0,.3)");
      $(".result").html(answer);

    }
    // BUILD EXPESSION: DECIMAL
    else if(val === ".") {
      $(".expression").append(val);
    }
    // BUILD EXPRESSION: OPERATORS
    else if(val.match(num)) {
      $(".expression").append(" " + val + " ");
    }
    // BUILD EXPRESSION: NUMBERS
    else {
      $(".expression").append(val);
    }
  });
  
});

