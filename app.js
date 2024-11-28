    // exercise 21

    //    question 1
// let firstName = prompt("Please enter your first name: ");

// let lastName = prompt("Please enter your last name: ");

// let fullName = firstName + " " + lastName;

// alert("Hello, " + fullName + "! Welcome!");


// question 2

// let favoritePhone = prompt("What is your favorite mobile phone model?")
// let inputLength = favoritePhone.length;

// document.write("Your favorite phone model is: " + favoritePhone + "<br>");
// document.write("The length of your input is: " + inputLength);
  
// questin 3

// let word = "Pakistani";
// let index = word.indexOf("n");
// console.log(index);
//     document.write("<h1>String: Pakistani<br>Index of 'n' is: " + index + "</h1>")


// question 4
// let word = "Hello World";
// let lastIndex = word.lastIndexOf("l");
// document.write("<h1>String: Hello World<br>Last index of 'l' is: " + lastIndex + "</h1>");

// question5

// let word = "Pakistani";
// let charAtIndex3 = word.charAt(3);
// document.write("<h1>String: Pakistani<br>Character at index 3: '" + charAtIndex3 + "'</h1>")


// question6

// let firtname = prompt("enter name");
// let lastname = prompt("last name");
// let fulname = firtname + " " + lastname;
// document.write (fulname.concat +  ("hi"))


// queestion 7

// let city = "Hyderabad";
// document.write("<h1>City: " + city + "</h1>");
   
// let newCity = city.replace("Hyder", "Islam");

// document.write("<h2>After replacement: " + newCity + "</h2>")

// question 9

//  let userInput = prompt("enter"); 
// let upperCase = userInput.toUpperCase();
 
// document.write("<h1>User Input: " + userInput + "</h1>");
// document.write("<h2>Upper Case: " + upperCase + "</h2>")


// quesyion 11

// let userInput = prompt("inter")
// let titleCase = userInput.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

// document.write("<h2>Show in title: " + userInput + "</h2>");
// document.write("<h2>Title case: " + titleCase + "</h2>");


// question 10

// let stringValue = "472";
 
// document.write("<h1>Value: " + stringValue + "</h1>");
// document.write("<h2>Type: " + typeof stringValue + "</h2>");
// let numericValue = parseInt(stringValue);

// document.write("<h1>Value: " + numericValue + "</h1>");
// document.write("<h2>Type: " + typeof numericValue + "</h2>")
  

// qestion 12

// var num = 35.36;
 
// var numString = num.toString();
  
// var result = numString.replace(".", "")
// document.write("<h1>Number: " + num + "</h1>");
// document.write("<h2>Result: " + result + "</h2>");



// question 13

let username = prompt("enter");

 
while (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
  username = prompt("enter");
}
document.write("<h1>Username: " + username + "</h1>")




