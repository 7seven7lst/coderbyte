// alphabet soupt take a str parameter and return the string with the letters in alphabetical order
function AlphabetSoup(str) { 

  // code goes here  
  var arr = str.replace(/\s/g, "").split("");
  arr = arr.sort(function(a,b){return a>b;});
  return arr.join("");
         
}