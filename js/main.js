
// function 

// #1
function firstFunction() {
  let x = 32;
  let y = 32;
  let z = x + y
  console.log(z);

}

firstFunction();


// #2
let secondFunc = function () {
  let x = 32;
  let y = 32;
  let z = x + y
  console.log(z);
}

secondFunc();


//#3 
let thirdFunc = function (param1, param2) {
  return param1 + param2;
}


console.log(thirdFunc(34, 45));


//#4
//4.1
let fourthFunc = () => { console.log("Hello world") }

let fiftthFunc = (x) => x;  // function with implicit return statement

//IIFE = immediately invoked function expression

let myArr = [34, 56, 67, 23, 78];
let myNewArra = myArr.map((a) => a * 2);

console.log(myNewArra);



// callback function

function displa(x) {
  console.log(x);
}


function testCalback(func) {
  let result = 40 * 4;
  func(result);
}


//using the function 
testCalback(displa)



// the Window Object

console.log(window);
console.log(this);

// console.log('Online: '+window.ononline);
// console.log('Offline : '+window.onoffline);


// Document Object

console.log(window.document);
console.log(document);



// Many inbuuilt Js Nethosd  for reading or targeting elemets on the DOM
/*
1. document.getElementById()
2. document.querySelector()
3. document.querySelectorAll()
4. document.getElementsByTagName()
5. document.getElementsByClassName()
6. document.getElementByName()
*/

let div = document.getElementsByTagName("div");
let div2 = document.querySelectorAll("div");
console.log(div);
console.log(div2);


const dob = document.querySelector(".dob");
const dob_btn = document.querySelector(".dob_btn");
const disp = document.querySelector(".display");

function calculateAge(dt) {
  if (dt) {
    let now = new Date();
    let dob = new Date(dt);
    let diff = now.getTime() - dob.getTime(); // date diff in milliseconds
    diff = diff / 1000;
    diff = Math.floor(diff / 3600 / 24 / 365);
    disp.innerHTML = `You are now ${diff} year(s) old`;
    console.log(diff);
    console.log(now.getFullYear(), dob.getFullYear());
    console.log(now.getFullYear() - dob.getFullYear());
  } else {
    disp.innerHTML = "Date of birth field is requiered";
  }
}



dob_btn.addEventListener("click", function () {
  console.log(dob.value);
  calculateAge(dob.value);
});

dob.addEventListener("change", function (e) {
  console.log(e.target.value);
  calculateAge(e.target.value);
});
