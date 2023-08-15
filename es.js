//string template

// var vehicle = "creta";
// var showname = `car:${vehicle}` ;
// console.log(showname);


//arrow function

// function hello(){
//   console.log("Hello");
// }
// hello();

// let hello = function(){
//   console.log("hello");
// }
// hello();


// let hello = () => console.log("hello");
// hello();

// let welcome = (name,age) => 
//  `hello and welcome ${name}-${age}`;

// console.log(welcome("jaya",19));


// console.log(typeof welcome);
//...................................
//spread operator   ...xyz
// function sum(name, ...args){
//   console.log(arguments);
//   console.log(`Hello ${name} : `);
//   let sum =0;
//   for(let i in args){
//     sum += args[i];
//   }
//   console.log(sum);
// }
// var arr =[10,20,30,40];
// sum("jaya",...arr);
//...................................


// var arr=[10,20,30,40];
// var arr1=arr;
// arr.push(50);

// console.log(arr1);
//..........................................
//optional chaining
// const user ={
//     name:"thapa",
//     age:28,
//     address:{
//         street: "Main St",
//         city:"New Road",
//         state:"PK",
//         zip:10101,

//     },
// };
// console.log(user.address?.roadnumber?.street);

//........................................
//destructuring--> used to unpack values


// let arr = [3,5,8,9,12,14];
// let [a,b,c,d, ...rest] = arr;
// console.log(a,b,c,d,rest);

// let [a,b,, ...rest]= arr
// console.log(a,b, rest)

// let {a,b}= {a:1, b:5}
// console.log(a,b)


//........................................
// let cauy = { name: "Medi" };
// let obj = { ...cauy };

// const obj1 = {
//   names: "hello",
//   age: "22",
// };

// const { names, age } = obj1;
// console.log(names, "name");

// const obj2={
//   name:'asdfsadf',
//   obj4:undefined
// }
// console.log(obj2?.obj4);



