
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




//working with forms 
let form = document.forms;
console.log(form);
console.log(form[0]);       // the first form on the page
console.log(form.signup__form);//the form on the page by its name 
console.log(form.length);// the count of the number of forms on the page 

form.signup__form.addEventListener('submit', function (e){
  e.preventDefault();     //prevent default behavior of the form 
  // location.href = e.target.action; // redirecting to the action url
  let uname = documen.getElementById("username").value.trim();
  let email = documentt.getElementById("email").value.trim();
  let pass = document.getElementById("password").value.trim();
  let Utype = document.getElementById("usertype").value.trim();

  console.log(uname, email, pass);

});

//attaching an event listener to the userame field
form.signup__form.elements[0].addEventListener("keyup", function (e) {  //we  have key up as well
  // console.log(e.target.value);
  console.log(e.keycode, e.which);     // to know which alphabet the user entered
  
})

form.signup__form.elements[0].addEventListener("mousecenter", function (e) {
console.log(e);
});

form.signup__form.elements[0].addEventListener("mouseleave", function (e) {
  
console.log(e);
});
 
form.signup__form.elements[0].addEventListener("focus", function (e) {
  console.log("yeah you have gained foucs");
});
//attaching the mouse event to the body element
document.body.onmousemove = function (e) { 
  console.log(e.pagex, e.pagey);
  console.log(e.screenx, e.screeny);



  //attaching event to the pssword input
  form.signup__form.elements[2].onkeyup = function (e) {
    if (e.target.styel
}










//input validation 
  const result = document.querySelector('p.result');
  const inp = form.signup__form.elements[4];
  inp.oninput = function (evt) {
    //console.log(evt.);
    if (inp.checkvalidity()) {
      result.style.backgroundcolor = "palegreen";
      result.style.innerHTML = "input ok";

    } else {
      result.style.style.backgroundcolor = "pink";
      result.innerHTML = inp.validationMessage;
    }


    //checking for validity of an input value using oncjage event
    inp.onchange = function (e) {
      console.log(e.target.checked);
    }

    //conditionslas
    /*
    1. if - statement
    2. if - else statement
    3. if - else-if statement
    4. switch statement
    */
   
   //if statement
    let testNum = 90;

    if (testNum > 10){
      console.info("valid", testNum);
    } else {
      console.error("wrong input");
    }


    //if else  if
    if (testNum > 10) {
      console.info("valid", testNum);
    } else if (testNum >= 11 && testNum <= 20) {
      console.log("11-20 range");
    } else if (testNum == 40) {
      console.log("still within range");
      
    } else {
      console.error("out of range");
    }


    // switch 

       let banky = "zenith";

       switch (banky) {
       case "zenith":
        
        console.log("welcome to zenith bank ");
        break;
        
        case "first ":
          console.log("welcome to first bank ");
          break;
          
         case "fidelity";
           console.log("hello welcome to fidelity bank");
           break;
         
         default:
           console.log("sorry your bank is not available");
           break;  
        }