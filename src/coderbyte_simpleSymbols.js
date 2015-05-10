/*

*/

function SimpleSymbols(str) { 

  // code goes here  
  var arr=str.split("");
  for (var i=0; i<arr.length; i++){
    if (arr[i].match(/[a-z]/gi)!=null){
      if (i==0 || i == arr.length-1){
        return false;
      }
      else{
        if (arr[i-1]!="+" || arr[i+1]!="+"){
          return false;
        }
      }
      
    }
  }
  return true;
         
}

console.log(SimpleSymbols('+a+===+b+')) ; // should yield true