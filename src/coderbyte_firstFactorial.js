function coderbyte_firstFactorial(num) { 

  // code goes here  
  if (num <0) { // invalid case
    return;
  }
  if (num=== 1 || num === 0){
    return 1;
  }
  else {
    return num*coderbyte_firstFactorial(num-1);
  }        
}