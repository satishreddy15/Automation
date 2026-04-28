// //String Template
// let name = "yash";
// let age = 3;
// let result = `My name is ${name} and my age is ${age}`;
// console.log(result);


// //String Immutability - Strings are immutable, once created you cannot change a string directly.
// let string = "yashwin";
// str = "Y" + string.slice(1);
// console.log(str);


// //String search
// let text = "java script language";
// console.log(text.indexOf("r"))


// let file = "string based concepts";
// console.log(file.lastIndexOf("concepts"));


//Count how many times a letter appears using string
let str = "sravan";
let count = 0;
for(let i =0; i<str.length; i++) {
     //if (str.substring(i, i + 1) === "a") { - using substring method
    if(str[i] === 'a') {
        count++;
    }
}
    console.log("--count of a is-- " + count);


//Count how many times a letter appears using a whole string and get each string count..
let str1 = "sanjay";
let result = {};
for(let i = 0; i<str.length; i++) {
    let char = str1[i];
    result[char] = (result[char] || 0) + 1;
}
console.log("--count of each letter in a string-- ", result);


//reverse string..
let str5 = "sravan";
let reversed = "";
// convert string to array
let array = str5.split("");
// loop from last index to first
for (let i = array.length - 1; i >= 0; i--) {
  reversed = reversed + array[i];
}
console.log("--reversed string is-- " + reversed);


//Arrays - Count how many times a letter appears using arrays
let arr = ["a", "b", "a", "c", "a"];
let count1 = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "a") {
    count1++;
  }
}
console.log("--Count of a using array is-- ", count1);


function countNumber(str, ch) {
    let arr = str.split("");
    let count = 0;
    for(let i = 0; i<str.length; i++) {
        if(arr[i] === ch) {
            count ++;
        }
    }
    return count;
}
let value = countNumber("maneesh", "e");
console.log("--count of e using function-- : " + count);


//count words in sentence - in string
function textMessage(sentence) {
    let count = 1;
    for(let i = 0; i<sentence.length; i++){
        if(sentence[i] === " ") {
            count ++;
        }
    }
      return count;
}
console.log(textMessage("ru u learning java script"));


//checking Palindrome or not
function checIsPalindrome(str) {
    let reversed = "";
    for(let i= str.length - 1; i>=0; i--){
       reversed += str[i];
    }
    if(str === reversed){
        return "Palindrome";
    } else {
        return "not a Palindrome";
    }
}
console.log(checIsPalindrome("cherry"));


//finding longest word in a string
function longestWord(sentence) {
   let words = sentence.split(" ");
   let longest = " ";
   for(let word of words) {
    if(word.length > longest.length) {
        longest = word;
    }
   }
   return longest;
}
console.log(longestWord("ru working today"));


function mostOccuringLetter(letter) {
    const letterFrequency = {};  //Create an Empty Object
    letter = letter.toLowerCase();  //Convert String to Lowercase
    for(let char of letter) {   //Count Each Character (for…of loop)
        letterFrequency[char] = (letterFrequency[char] || 0) + 1;
    } 
    let maxCount = 0;  //Initialize Maximum Count
    for(let char in letterFrequency) {   //Find the Highest Frequency (for…in loop)
        if(letterFrequency[char] > maxCount) {
            maxCount = letterFrequency[char];
        }
    }
    return maxCount;   //return result
}
console.log(mostOccuringLetter("testmate"));  //function call - getting output