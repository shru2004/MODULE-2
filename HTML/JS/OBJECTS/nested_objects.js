//let us create an object
let person =
{
    name: "shruthi",
    age: "19",
    gender: "female" ,
    eyecolor: "black" ,
    cars:{
        car1:"fortuner" ,
        car2:"bugatti chiron"
    }
}
for(i in person.cars)
{
    console.log(person.cars[i]);
}