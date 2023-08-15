//async 
//syntax

// const getData = async() => {
//     let data ="Hello World";
//     return data;
// }
// getData().then(data => console.log(data));

//await
// const getData = async () => {
//     let y = await "Hello World";
//     console.log(y);
// }
// console.log(1);
// getData();
// console.log(2);


//.............................................................................
// function asynchronous_operational_method(){
//     let first_promise = new Promise((resolve,reject) => resolve("Hello"));
//     let second_promise = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("me hu ninja hatthori");
//         },3000);
//     });
//     let combined_promise = Promise.all([first_promise, second_promise])
// return combined_promise;
// }

// async function display(){
//     let data = await asynchronous_operational_method();
//     console.log(data);
// }
// display();

//..............................................................................


// const pobj1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let roll_no =[1,2,3,4,5];
//         resolve(roll_no);
//        // reject("Error");
//     },2000);
// });
// const getBiodata = (indexdata) => {
//     return new Promise((resolve, reject) => {   //.
//         setTimeout((indexdata) => {
//             let biodata = {
//                 name:'vinod',
//                 age : 26
//             }
//             resolve(`my roll no is ${indexdata}. My name is '${biodata.name}' and i am '${biodata.age}' years old.`);
//         }, 2000, indexdata)
//     });
// }
// async function getData(){
//      const rollnodata = await pobj1;
//      console.log(rollnodata);

//      const biodata = await getBiodata(rollnodata[1]);
//      console.log(biodata);
//      return biodata;
// }
// const getname = getData().then((myname) => {
//     console.group(myname);
// })