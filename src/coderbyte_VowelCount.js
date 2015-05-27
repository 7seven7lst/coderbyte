function VowelCount(str) { 

  // code goes here  
  var arr = str.match(/[aeiou]/gi);
  if (arr === null){
    return 0;
  } else{
    return arr.length;
  }     
}