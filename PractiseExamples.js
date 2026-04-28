//---------------------JAVA SCRIPT CONCEPTS------------------------

//--------------------FUNCTIONS------------------------------------
//function declaration
function add(a, b) {  
  return a + b;
}
console.log("----------functions----------");
console.log(add(10, 20));  //function call


//function expression
let multiply = function(a, b) {  
  return a * b;
};
console.log(multiply(5, 4));


//parameters & arguments
function greet(name) {  //parameters
  console.log("Hello " + name);
}
greet("Sai");  //arguments


 //return statement
function square(num) { 
  return num * num;
}
let result1 = square(5);
console.log(result1);


//arrow function
const addit = (a, b) => {  
  return a + b;
};
console.log(addit(15, 10));


//default parameters
function welcome(name = "Guest") {  
  console.log("Welcome " + name);
}
welcome();    //welcome guest
welcome("Sree");    //welcome sree


// const greetUser = (name = "Guest") => `Welcome, ${name}!`;  //arrow function
// console.log(greetUser("kiran"));
// console.log(greetUser());


// const power = (base, exponent = 2) => base ** exponent; .; i++
// console.log("Arrow + Default Params:", power(5));
// console.log("Arrow + Default Params:", power(5, 3));


// const calculate = (price, tax) => {
//   let total = price + tax;
//   return total;
// } 
// console.log(calculate(10,12));


// function message() {  //Function with no parameters
//   console.log("Hello team");
// }
// message();


// function multiply(a, b) {
//   return a * b;
// }
// const divide = function(a, b){
//   return a/b;
// }
// const subtract = (a, b) => a - b;
// console.log(multiply(10, 22));
// console.log(divide(21, 31));
// console.log(subtract(21,11));


//------------------------STRINGS--------------------------------
let fname = "sai";
let lname = "kiran";
Fullname = fname + " " + lname;
console.log("----------strings----------");
console.log(Fullname);


let a = "Hello";
let b = new String("sai");
console.log(typeof a);
console.log(typeof b);


 //String template literal
let name = "Harsha";  
let age = 22;
let result = `This is ${name} and I'm ${age} years old`;
console.log(result); 


 // String template literal - multiline
let msg = `Hello javascript concepts, 
easy to undersrand`;   
console.log(msg);


let str = "JavaScript";
str = "j" + str.slice(1);
console.log(str);


let str1 = "JavaScript";
console.log(str1.length);
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.charAt(4));
console.log(str1.slice(0,4));   //Extracts part of string(start to end)
console.log(str1.substring(4,7));  // Same as slice but no negative index(start to end).
console.log(str.substr(4, 6)); // Starts wwith index and ends with length.
console.log(str1.replace("Script", " is Complex "));

console.log("----------Search based string concepts-------------");
console.log(str1.indexOf("c"));
console.log(str1.lastIndexOf("Script"));
console.log(str1.includes("Java"));    //Returns true/false.
console.log(str1.startsWith("Java"));
console.log(str1.endsWith("Script"));
console.log(str1.search("rip"));


let value = "Hello kiran Hello";
let val = value.replaceAll("Hello", "Hi");
console.log(val);


let string = "   Automation test   ";     
console.log(string.trim());    //Removes spaces from both ends.


let str2 = "J,A,V,A";
console.log(str2.split(","));    //Converts string to array.


 //CONCAT - Used to combine two or more strings into one single string.
let test =  "Automation";
let test1 = "testing";
let res = test.concat(" ", test1);
console.log(res);  
console.log(test + " " + test1);


//----------------------------ARRAYS-------------------------------
// for…of (arrays)  &  for…in (objects)
//single array
let course = ["java", "selenium", "javascript"];
course[1] = "postman";   //Array modify
console.log("----------Arrays----------");
console.log(course[1]);  
console.log(course.length);


//multi array
let matrix = [
  [1, 2, 3],
  [4, 5, 6]
];
console.log(matrix[0][2]);   
console.log(matrix[1][1]);


//Empty array - using push
let items = [];
items.push("Pen");
items.push("Book");
console.log(items); // ["Pen", "Book"]


//using pop
let colors1 = ["red", "green", "yellow", "black"];
let colorsremoved = colors1.pop();
console.log(colorsremoved);
console.log(colors1);


//Array method types
let array1 = [101, 102, 99 ,56, 87, 66];
let result9 = array1.filter(n => n%2 === 0) 
//  array1.filter(n => n%2 === 0) 
     .map(n => n *2)
     .reduce((a, b) => a + b)
    //  .forEach(n => {
      // console.log("Every array seperate addition using forEach method:" + n)
      console.log("Total array addition using reduce method:" + result9);
    //  });


 //array of objects
let user = [
  {name: "Sree", role: "tester"},
  {name: "yash", role: "dev"}
];
console.log(user[0]);   //entire object
console.log(user[1].name);  //yash


let colors = ["green", "yellow", "red", "grey"];
for(let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}


//-------------------------NUMBERS-----------------------------------
let  exponentbig = 6e3;
let exponentsmall = 2e-3;
console.log("----------Numbers----------");
console.log(exponentbig);   
console.log(exponentsmall);


let message= "Hello" * 1;
console.log(message);  //NaN


let value1 = 10/0;
let value2 = -10/0;
  console.log(value1);  //Infinity
  console.log(value2);
  

let a1 = 628692603668n;
let a2 = 324n;
let sum = a1 + a2 ;
console.log(sum);   //BigInt


let x = "15.99";
let y = Number(x);
console.log(typeof y);  //Number conversion - String -> Number
console.log(y);
console.log(parseInt(y));
console.log(parseFloat("15.99"));


//--------------------MATH---------------------------------
let num = 55.5;   //Rounds to the nearest integer.
let final = Math.round(num);
console.log("----------Math concepts----------");
console.log("final num is: " + final);


let number = 24.6;
console.log(Math.ceil(number));  //Rounds up to the next integer.
console.log(Math.floor(number));  //Rounds down to the previous integer.
console.log(Math.trunc(number));   //Removes the decimal part.
console.log(Math.sqrt(number));   //Returns square root.
console.log(Math.random(number));  //Returns a random number between 0 and 1.

// let numb = (24, 6);
// console.log(Math.pow(numb));   //Returns power of a number.
// console.log(Math.min(numb));   


//------------------------------USING JSON--------------------------------
 //object to JSON - Object to JSON means converting a JavaScript object into a JSON string so it can be stored or sent to a server.
let userr = {    
  name : "sai",
  age : 25,
  role : "tester",
  ISworking : "true" 
}
let JsonData = JSON.stringify(userr);
console.log("----------JSON concepts----------");
console.log(JsonData);


 //JSON to object - JSON to Object means converting a JSON string into a JavaScript object so it can be used in a program.
let JsonString = '{"name" : "yash", "age" : 19, "role" : "dev"}';   
let UserObj = JSON.parse(JsonString);
console.log(UserObj.name);
console.log(UserObj.age);


//JSON Array
let JsonArray = '[{"name" : "kiran", "role" : "Analyst"}, {"name" : "mani", "role" : "It"}]';     
let user1 = JSON.parse(JsonArray);
console.log(user1[0].name);
console.log(user1[1].role);


//-------------------------------USING DATE------------------------------------
let today = new Date();   
let year = today.getFullYear();
console.log("----------Date concepts----------");
console.log(year);


let birthyear = new Date("1989-2-11");
let currentyear = new Date().getFullYear();
let Cage = currentyear - birthyear.getFullYear();
console.log("present age is: " + Cage);


let Fyear = new Date().getFullYear();
if(year % 4 === 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}


let todayDate = new Date();
let date = todayDate.getMinutes();
console.log(date);


//-------------------------------SETS---------------------------------------------
//A Set is a collection of unique values (no duplicates allowed).

let mobileNum = [11, 12, 11, 15, 16, 12];
let uniqueNUm = new Set(mobileNum);
console.log("----------sets concepts----------");
console.log(uniqueNUm);


//Sets types
let addNum = new Set();  
addNum.add(20);
addNum.add(30);
addNum.add(20);
addNum.add(40);
addNum.delete(101);
console.log(addNum.has(20));
console.log(addNum);
console.log(addNum.size);
console.log(addNum.clear());


//Checking existing one(sets)
let namee = new Set(["kiran", "karan"]);   
let newNamee = "karan";
if(namee.has(newNamee)) {
  console.log("karan name already exists");
 } else {
  namee.add(newNamee);
 }


//------------------------------MAPS------------------------------------
//A Map is a collection of key–value pairs where keys can be of any type.

let map = new Map();
map.set("name", "sai");
map.set("age", 21);
map.set("role", "tester")
map.set("location", "Hyd")
console.log("----------Maps concepts----------");
console.log(map);
console.log(map.get("name"));
console.log(map.has("age"));
console.log(map.delete("role"));
console.log(map.size);


//map - using clear
let userSession = new Map();
userSession.set("name", "sai");
userSession.set("role", "dev");
console.log("--Before session clear--");
console.log(userSession);
console.log("size:", userSession.size);
userSession.clear();
console.log("--After session clear--");
console.log(userSession);
console.log("size:", userSession.size);


//map - using for of loop
let employee = new Map([
  ["name", "Sree"],
  ["dept", "QA"],
  ["experience", 3]
]);
for (let [key, value] of employee) {
  console.log(key + " : " + value);
}


//----------------------------Based on vowels----------------------------
let str4 = "yashwin";
let count = 0;
for (let ch of str4) {
  if ("aeiou".includes(ch)) {
    count++;
  }
}
console.log("----------Vowels concepts----------");
console.log("count of vowels in string are: " + count);


let ch = 'a';
if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
  console.log(ch + " is vowel");
} else {
  console.log(ch + " is consonant");
}


//----------------------------HOISTING USING VAR---------------------------------
// console.log(x1);
// var x1 = 10;


// var b2;   //hoisted
// console.log(b2);
// b2 = 10;  //not hoisted


// function test5() {
//   console.log(x4);
//   var x4 = 5;
// }
// test5();


// sayHello();   //function declaration hoisting
// function sayHello() {
//   console.log("Hello JS!");
// }


//-------------------------------REGULAR EXPRESSION-----------------------------------------
let text = "corejava";
let result2 = /core/.test(text);
console.log("----------regular expression----------");
console.log(result2);


// let RegMatch = /Hello James/;
// console.log(RegMatch.test("Hello James"));

let RegMatch = "Hello James";
console.log(RegMatch.match(/James/));


let repex = "Welcome to hyd";
console.log(repex.replace("hyd", "chennai"));


//-------------------------ERRORS-----------------------------
// if (true {    //syntax error
//   console.log("Hi");  
// }

// console.log(x); // ReferenceError

// let num9 = 10;   //TypeError
// num9();

// let arr = new Array(-1); // RangeError


//---------------descructing-----------------
// let nums = [10, 20, 30, 40];
// console.log(nums);
// let [m, , o, p] = nums;
// console.log(o);


let words = "Are you learning java script to get trained".split(' ');
// let [m, n, o, p, q] = words;
let [m, n, , ...p] = words;  
console.log("----------Descructing----------");
console.log(words);
// console.log(p, q);
console.log(p);   // --> skipping the third array and returns the next set of arrays..


//swap two values
let s = 10;
let t = 20;
[s, t] = [t, s]
console.log(s, t);


//------------this-------------
const person = {
  name : "kiran",
  age : 22,
  showName : function() {
    console.log(this.name);
  }
};
person.showName();


//-------This using arrow function-------
const user9 = {
name : "tharun",
age : 22,
show : function () {
  const inner = () => {
    console.log(this.name);
  }
  inner();
}
}
user9.show();


//----------class inheritance--------
class Animal {
 constructor(name) {
  this.name = name;
 }
 eat() {
  console.log(this.name + "is eating");
 }
}
class Dog extends Animal {
  bark() {
    console.log(this.name + " is barking");
  }
}

const dog1 = new Dog("Rocky");
dog1.eat();   
dog1.bark(); 