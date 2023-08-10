// // //array
// var arr=[10,"hi",30];
// console.log(arr);

// //filter
// var ages=[10,20,30,40];
// console.log(ages);

// var b = ages.filter(chkadlt);
// console.log(b);

// function chkadlt(age){
//     return age >= 18;
// }
// //forin
// var a={
//     firstName: "Ram",
//     lastName:"kumar",
//     age:21
// };
// for(var key in a){
//     console.log(a[key]);
// }

// //map() method

// var c= [11,33,44,55,66];
// var h=c.map(test);
// console.log(h);
// function test(x){
//     return x*10;
// }
//array of objects
// var arr = [
//   { fname: "mkkl", lname: "nusd" },
//   { fname: "ruiw", lname: "njjs" },
//   { fname: "asdad", lname: "qwqwe" }
// ];
// var e= arr.map(test);
// console.log(e);

// function test(r){
//     return r.fname+"  "+r.lname;
// }


//reduce method
// the reduce() method executes a reducer function( that you provide) on each element of the Array, resulting in single output value .
// The reducer function takes four arguments:
// Accumulator
// current Value 
// current index
// source Array
//arr.reduce(callback(accumulator,currentValue,[,index[,array]])[,initialvalue])

// let arr =[1,2,3,4,5,6];
// sum = 12;
// average = 4;
// product = 30;
// let sum = arr.reduce((accum,curr)=>{
//     return accum * curr;
// },2)
// console.log(sum);


//for of
// let num =" hello  jaya";

// for(let x of num)
//   console.log(x);