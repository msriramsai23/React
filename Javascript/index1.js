
console.log("hello world");

//use let instead of var
let a=5;

const b=3;

// arrow functions
 const myfunc= (name) =>{
    console.log('bye ${name}');
 }
 myfunc("sriram");

 //export

 //export default myfunc;

 //import

// import person from "./person.js";
// this to import export deafult stuff

//import {myfunc} from "./person.js";
// this to import exact utility

//classes

// class can have both properties and methods

class person{
   name="pax";
   me="max";
   call=()=>{
    console.log(this.name , this.me);
   }
}
const myperson=new person();
myperson.call();

//inheritance
   //extends

/// (...) spread 
const oldarray=[2,35,3];
const newarray=[...oldarray,1,2];

// de-structuring

const numbers=[1,2,3];
[num1,,num3]=numbers;
console.log(num1,num3);

//map

const number=[1,2,3];
const doubleNumArray=numbers.map((num)=>{
    return num*2;
});
console.log(doubleNumArray);