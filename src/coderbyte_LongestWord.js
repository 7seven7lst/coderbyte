function coderbyte_LongestWord(sen) { 

  // code goes here 
  var arr=sen.split(" ");
  for (var i=0; i<arr.length; i++){
    arr[i]=arr[i].replace(/\W/g, "");
  }
  arr=arr.sort(function(a,b){return b.length-a.length;});
  return arr[0];
  
         
}