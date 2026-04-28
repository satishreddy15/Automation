//---------------Async-------------------
//using async - simple example 
console.log("Java");    
setTimeout(() => {  
    console.log("----------using setTimeout method - async-----------")
    console.log("Python");
}, 3000);
console.log("Java script");


//Async - await
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data has received");
        }, 2000);
    });
}
//getData.then(data => console.log(data));     //after 2 sec resolve param's o/p will get..
async function fetchData() {
  console.log("start");
  let result = await getData();
  console.log(result);
  console.log("End");
}
fetchData();


//using Nested callback
function test(next) {   //first callback
  setTimeout(() => {
    console.log("------------using setTimeout method- async nested callback----------------");
    console.log("Ru planning to visit");
    next(); // call next function
  }, 3000);
}
function test1(next) {  // second callback
  setTimeout(() => {
    console.log("Is still there any plan");
    next(); // call next function
  }, 2000);
}
function test2() {      // last function
  setTimeout(() => {
    console.log("Have u searched for the location");
  }, 1500);
}
test(() => {
  test1(() => {
    test2();
  });
});


 //using resolve promise method
function text() {  
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve("Are you coming to Hyd");
        }, 3000);
    });
}
function text1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("when will you arrive in Hyd");
        }, 2000);
    });
}
function text2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Have you safely reached");
        }, 1500);
    });
}
text () 
.then((value) => {
    console.log("----------using resolve promise method-----------")
    console.log(value);
    return text1();
})
.then((value) => {
    console.log(value);
    return text2();
})
.then((value) => {
    console.log(value);
    console.log("---All promises are resolved---");
});


//using resolve and reject promise method with if block
function message() {  
    let = isPlan = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isPlan) {
               resolve("is there any weekemd plans this week");
            } else {
                reject("will tell you after sometime");
            }
        }, 3000);
    });
}
function message1(){
    let isArrive = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isArrive){
         resolve("Can we plan a movie");
            } else {
                reject("if there will be no plans will tell");
            }
        }, 2000);
    });
}
function message2(){ 
    let isReach = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isReach) {
           resolve("At what time the movie will start");
            } else {
                reject("May be around 9pm");
            }
        }, 1500);
    });
}
message() 
.then((value) => {
    console.log("----------using resolve and reject promise method with if block-----------")
    console.log(value);
    return message1();
})
.then((value) => {
    console.log(value);
    return message2();
})
.then((value) => {
    console.log(value);
});


//----------------promises-------------
//promise is an object that handles async operations..
//Runs multiple promises in parallel and ALL promises should resolve, Rejects immediately if any one fails..
let p1 = Promise.resolve(10);
let p2 = Promise.resolve(20);
let p3 = Promise.resolve(30);
Promise.all([p1, p2, p3])
.then(result => console.log(result));


//simple example using promise methods..
function getData() {
    return new Promise((resolve, reject) => {
//let promise =  new Promise((resolve, reject) => {
    let result = true;
    if(result) {
        resolve("Data fetched successfully");
    } else {
        reject("errors got received");
    }
});
}
getData()
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
console.log("Always success message  should be received");
});


//all settled
Promise.allSettled([
    Promise.resolve("All ok"),
    Promise.reject("error occurs")
]).then(res => console.log(res));


function placeOrder(orderPlaced) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(orderPlaced) {
        resolve("order placed successfully");
    } else {
        reject("order has been cancelled");
    }
    }, 2000);
});
}
async function waitingOrder() {
    try {
        let res1 = await placeOrder(true);   //here await waits promise to resolve or reject based on given boolean value..
        console.log(res1);
    }  catch(err)  {
         console.log(err);
    } finally {
        console.log("your order has been completed");
    }
}
waitingOrder();


//promise chaining
function task1() {
    return Promise.resolve("data from task1");
} 
function task2(data) {
    return Promise.resolve(data + " -> acccesed by task 2");
}
task1()
.then(result => task2(result))
.then(finalData => console.log(finalData));


//async, await
function getMessage() {
    return new Promise(resolve => {
        setTimeout(() => resolve("here's the async and await"), 2000);
    });
}
async function showMessage() {
    let message = await getMessage();
   console.log(message);
    }
showMessage();



function payment(status) {
    return new Promise((resolve, reject) => {
       if(status) {
        resolve("passes the resolve statement");
       } else {
        reject("fails the reject statement");
       }
    });
}
async function getPayment() {
    try {
         let result = await payment(false);
    console.log(result);
   } catch (err) {
     console.log(err);
   } finally {
    console.log("condition successful");
   }
}
getPayment();


function getValue(test) {
    return new Promise((resolve, reject) => {
        if(test) {
            resolve("ru testing an application");
        } else {
            reject("No i'm not testing it");
        }
    });
}
getValue(true)
.then(res => console.log(res))
.catch(err => console.log(err))
.finally(() => console.log("completed the application testing"));