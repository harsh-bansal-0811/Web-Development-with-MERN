//objects in javascript
//objects are in key valur pair
const ob1 = {Name: "Harsh",city: "Delhi",age: 23}
// const ob2 = new Object();
// const ob3 = {};
console.log(ob1.Name);
console.log(ob1.city);
console.log(ob1.age);
// console.log(ob2);
//adding the values in the objects
// ob2.college="ABES";
// ob2.contact=123456789;
// console.log(ob2);
// console.log(ob3);
// console.log(ob2["college"]);
//deleting the keys in the objects
console.log(ob1);
delete ob1.city;
console.log(ob1);
const A="city";
ob1[A]="meerut";
console.log(ob1);