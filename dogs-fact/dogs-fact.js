// const employee ={
//     clacTax(){
//         console.log("tax is 10%");

//     }
// }
// const sunil = {
//     salary : 10000 ,

// }
// sunil.__proto__= employee;


// class car {
//     constructor(apple , price){
//         this.theprice = price;
//         this.brandIs = apple;
//         console.log("this is car");

//     }
//     start () {
//         console.log("car is started");

//     }
//   stop(){
//     console.log("car is stopped");

//   }
// }

// let MarutiSuzuki = new car("red", 19);
// console.log(MarutiSuzuki);
// // MarutiSuzuki.start("apple iphone")
// let q = "sunil";
// class student {
//     constructor(name, rollnumber) {
//         this.name = name;
//         this.roll = rollnumber;

//     }
//     data() {
//         console.log(`welcome to banglore ${q}`);
//     }



//  }

//  class apple extends student {
//     constructor(name, rollnumber) {
//         super(name, rollnumber)
//     }

//     editdata() {
//         data = " you did your best"
//     }
// }
// let login = new student("sunil", 127);
// console.log(login);
// console.log(login.data());
// let admin1= new apple("bunty",121121212)


// function printing() {
//     console.log("war is comming");


// }
// setTimeout(printing,5000)
// setTimeout(() => {
//     console.log("welcome home");

// }, 4000);


// function sum(a,b) {
//     console.log(a+b);
// }
// function number(a,b ,add) {
//     add(a,b)


// }
// number(3,4,sum)
// function sum(number  , num) {
//     setTimeout(() => {
//         console.log("the sum is ",number);
//         if (num) {
//           num()  
//         }
//     }, 2000);


// }
// //                                                         call back hell
// sum(3,()=>{
//     console.log("getting number 2");
//     sum(23232,() =>{
//         console.log("getting number 3");
//         sum(9999)
//     });
// })

//                                                           promise  chain
// function sum(number) {
//     return new Promise ((resolve,reject) =>{
//     setTimeout(() => {
//         console.log("the sum is ",number);
//         resolve("welcome")

//     }, 6000);
//     })

// }
// console.log("fetching first ..........");
// sum(2323).then((res)=>{
//     console.log(res);
//     console.log("fetching second number ............");
//     sum(348833487).then((res)=>{
//         console.log(res);
//     })

// })

// //                                                                async await
// function sum(number) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("the sum is ", number);
//             resolve("welcome")

//         }, 1000);
//     })

// }

// async function allsum() {

//     console.log("loading 1st");
//     await sum(22)
//     console.log("loading 2nd");
//     await sum(3434)
//     console.log("loading 3rd");
//     await sum(8238)
//     console.log("loading 4th");
//     await sum(566)

// }
// console.log(allsum());
const url = "https://dog-api.kinduff.com/api/facts";
const fact = document.querySelector("#fact")
const btn = document.querySelector("#btn")


const main = async () => {
    console.log("getting data ...........");
    let promise = await fetch(url)

    console.log(promise);
    let info = await promise.json()
    console.log(info);
    console.log(info.facts);
    fact.innerText =info.facts
  
}
btn.addEventListener("click",main)

