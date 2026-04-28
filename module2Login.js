function userValidationLogin(username, password) {  
    if (username === "validUser" && password === "Valid@123") {    //Login Validation Conditions    
        return "Pass";
    }
    else if (username === "invalidUser" && password === "invalid#123") {
        return "Fail(Invalid Password)";
    }
    else if (username === "lockedUser" && password === "locked@123") {
        return "Fail(Locked Account)";
    }
    else if (username === "guestUser" && password === "Guest@123") {
        return "Pass";
    }
    else {
        return "Fail(Missng Password)";
    }
}
let users = [    //Test Data (Users Array)
  { id: "User1", username: "validUser", password: "Valid@123", expected: "Pass" },   
  { id: "User2", username: "invalidUser", password: "invalid#123", expected: "Fail" },
  { id: "User3", username: "lockedUser", password: "locked@123", expected: "Fail" },
  { id: "User4", username: "guestUser", password: "Guest@123", expected: "Pass" },
  { id: "User5", username: "emptyUser", password: "", expected: "Fail" }
];
for (let i = 0; i < users.length; i++) {   //Loop Execution
 let finalResult = userValidationLogin(users[i].username, users[i].password);   //Calling Function for Each User
 console.log(`id: ${users[i].id} |username: ${users[i].username} | password: ${users[i].password} | expected: ${users[i].expected} | finalResult: ${finalResult}`);   
}







 
































































