var leetspeak = function(word) {

var leetWord="";

    for (var i = 0; word.length; i++){
      if ((word.charAt(i).toLowerCase() === "e"){
        leetWord = leetWord.concat("3");
      }else {
        leetWord = leetWord.concat(word.charAt(i));
      }
    }
};
