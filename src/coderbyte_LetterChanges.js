/*
Using the JavaScript language, have the function LetterChanges(str) take the str parameter 
being passed and modify it using the following algorithm. Replace every letter in the string with the letter following 
it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new 
string (a, e, i, o, u) and finally return this modified string. 
*/
function coderbyte_LetterChanges(str) { 

  // code goes here  
  str=str.replace(/[a-z]/gi, function(a){
    switch (a){
      case "z": return "a"; break;
      case "Z": return "A"; break;
      default: return String.fromCharCode(a.charCodeAt(0)+1);
    }
  });
  str=str.replace(/[aeiou]/gi, function (a){
    if (a.toUpperCase()==a){
      return a.toLowerCase();
    }
    else{
      return a.toUpperCase();
    }
  });
  return str;  
}