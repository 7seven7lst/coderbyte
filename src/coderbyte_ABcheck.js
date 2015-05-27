function ABCheck(str) { 

  // code goes here  
  var arr = str.match(/[a|b].{3}[a|b]/gi);
  if (arr === null){
    return false;
  } else{
    return true;
  }       
}