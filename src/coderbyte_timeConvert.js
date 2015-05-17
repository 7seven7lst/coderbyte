

function TimeConvert(num) { 

  // code goes here  
  var hr = Math.floor(num/60);
  var min = num % 60;
  var str = "" + hr + ":" + min;
  return str;
         
}