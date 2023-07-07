//slice, map and filter in this
let nos = [4 ,2 ,13 ,4 ,25 ,6  ,88 ,8 ];
var m = 0;
nos.map(
    function(n)
    { 
        if (m<n){
        m = n
      }       
     }
)
console.log("The largest no is" ,m);

