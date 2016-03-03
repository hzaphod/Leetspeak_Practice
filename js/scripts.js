
var leetspeak = function(word) {

var leetWord="";

    for (var i = 0; word.length; i++){
        if ((word.charAt(i).toLowerCase() === "s") && (i!=0)){
          leetWord = leetWord.concat("z");
        }else if (word.charAt(i).toLowerCase() === "o"){
          leetWord = leetWord.concat("0");
        }else if (word.charAt(i) === "I"){
          leetWord = leetWord.concat("1");
        }else if (word.charAt(i).toLowerCase() === "e"){
          leetWord = leetWord.concat("3");
        }else {
          leetWord = leetWord.concat(word.charAt(i));
        }
      }  // end of for loop


      return leetWord;

}; //end of function leetspeak

$(document).ready(function() {
  $("form#leetspeak").submit(function(event) {
    var word = $("input#words").val();

    var result = leetspeak(word);

    $("#demo").text(result);

    $("#result").show();
    $("button.btn").click(function(){
      location.reload();
    })
    event.preventDefault();
  });
});
