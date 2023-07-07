let nos = [1 , 2 , 3 , 4 , 5];
//shift the element
let no = nos.shift(1);
console.log("Element shifted",no);
//print the array after the shift
console.log("Array shifted",nos);
nos.unshift(6);
//print the array after the unshift
console.log("Array unshifted",nos);
let arr = [1 , 2 , 3 , 4 , 5];
// arr.splice(1,4);//index, no of element 
// console.log("Array after splice",arr);
arr.splice(1,1,12,13,14);//index,replace,what to remove
console.log("Array after adding splice",arr);
console.log(arr.slice(2,15));
//home work
//insert 50 at index 4
//replace 2,3,4 with 34,45,67
