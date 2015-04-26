function LetterCapitalize(str) { 

  // code goes here  
  str=str.replace(/(^\w)|(\s\w)/g,function(a){ return a.toUpperCase()});
  return str;
         
}
   