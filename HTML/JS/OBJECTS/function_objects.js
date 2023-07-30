let person ={

 firstname:"jay" ,
 secondname:"shru" ,
 fullname: function()
 {
    return this.firstname+" "+ this.secondname;
 }
}
console.log(person.fullname());