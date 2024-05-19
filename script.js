let age = prompt("Please enter your age:");
age = parseInt(age);
let ticketPrice;

if (age <= 12) {
    ticketPrice = 10;
} else if (age >= 13 && age <= 17) {
    ticketPrice = 15;
} else {
    ticketPrice = 20;
}
console.log("The ticket price for your age is: $" + ticketPrice);

---------------------------------------------------------------------------------------------------------------------------------------------
let temperature = prompt("What is the current temperature ?");
let isRaining = prompt("Is it raining? (yes/no)").toLowerCase();
temperature = parseFloat(temperature);
if (temperature >= 25) {
    console.log("It's hot outside! ");
} else if (temperature >= 15 && temperature < 25) {
    console.log("It's mild outside.");
} else {
    console.log("It's cold outside!");
}
if (isRaining === "yes") {
    console.log("Don't forget to bring an umbrella ");
} else {
    console.log("No need for an umbrella");
}
------------------------------------------------------------------------------------------------------------------------------------------
function fibonacci(n) {
    if (n <= 1) {
        return n; 
    } else {
        return fibonacci(n - 1) +n; 
    }
----------------------------------------------------------------------------------------------------------------------------------------
Palindrome(str){
    if(str.length== 0||str.length== 1){
        return true}
    if(str.charAt(0)!=str.charAt(str.length-1)){
        return false}
    return Palindrome(str.substring(1, str.length-1));
}
-------------------------------------------------------------------------------------------------------------------------------------------------------
function power(n, e) {
    if (e === 0) {
        return 1;
    }
    else if (e === 1) {
        return n;
    }
    else if (e > 0) {
        return n * power(n, e - 1);
    }
    else {
        return 1 / power(n, -e);
    }
}
