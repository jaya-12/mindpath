//promise
// 3 object 
//pending fufilled rejected

// const pobj1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let roll_no =[1,2,3,4,5];
//         resolve(roll_no);
//     },2000);
// });
// //...promise consume
// pobj1.then((rollno) => {
//     console.log(rollno);
// });
//a promise can be created using promise constructor.

//........................................................




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
// //...promise consume
// pobj1.then((rollno) => {
//     console.log(rollno[1]);
//     return getBiodata(rollno[1]);
// }).then((kkskd) => {
//     console.log(kkskd);
// }).catch((error)=>{
//     console.log(error);
// })
