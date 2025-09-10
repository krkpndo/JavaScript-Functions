/*
1. Write a program that when invoked, returns the string "Hello, World"
*/

// function greeting () {
//     let print = `Hello, World`;
//     return print;
// }

// display = greeting();
// console.log(display);

/*
2. Write a program that takes two numbers, and prints the sum, difference, product, quotient, and remainder
*/

// function simpleCalculator (num1, num2) {
//     let sum = num1 + num2;
//     let difference = num1 - num2;
//     let product = num1 * num2;
//     let quotient = num1 / num2;
//     let remainder = num1 % num2;

//     console.log(sum);
//     console.log(difference);
//     console.log(product);
//     console.log(quotient);
//     console.log(remainder);
// }

// simpleCalculator(12,5);

/*
3. Write a program that takes in three parameters and prints the string "Hello, I am {first_parameter}. From {second_parameter}. I am pursuing a degree in {third_parameter}"
*/

// function basicInfo (name,address,program){
//     let print = (`Hello, I am ${name}. From ${address}. I am pursuing a degree in ${program}.`);
//     console.log(print);
// }

// basicInfo("Kristine Anselle Calaluan", "Talumpok Kanluran, Batangas City", "Computer Engineering");

/*
4. Write a function that takes an 'age' parameter. Write an expression that checks: 
    - if the age is greater than or equal to 18 and less than 60
    - is less than 18 or greater than 60
Print both results.
*/

// function ageIdentifier (age) {
//     let ismidAge = age >= 18 && age < 60;
//     let notBelong = age < 18 || age > 60;

//     console.log(ismidAge);
//     console.log(notBelong);
// }

// ageIdentifier(22);

/*
5. Write a parameterized function that calculates the hypotenuse of a right triangle.
*/

// function hypotenuseCalc (opp, adj) {
//     let hypotenuse = ((opp **2) + (adj **2))**0.5;
//     console.log(hypotenuse);
// }

// hypotenuseCalc(10, 10);

/*
6. Write a parameterized function that calculates the volume of a cylinder.
*/

// function cylinderVolume (pi,r,h) {
//     let cylVol = (pi)*(r**2)*(h);
//     console.log(cylVol);
// }

// cylinderVolume(3.1416,4,5);

/*
7. Write a function that takes in a number and returns true if the number is even and returns false otherwise.
*/

// function evenNumIdentifier (num1) {
//     let remainder = num1 % 2;
//     let isEvenNum = remainder == 0;
    
//     console.log(isEvenNum);

// }

// evenNumIdentifier(6);

/*
8. Write a function that takes in two numbers, returns the first number if smaller than the second number and returns false otherwise.
*/

// function numCompare (num1,num2) {
//     let compare = num1 < num2;
//     let numOneSmall = compare &&= num1;

//     console.log(numOneSmall);

// }

// numCompare(6,1);

/*
9. Write any function that implements string interpolation.
*/

// function studentInfo (name, age, student_num) {
//     console.log (`I am ${name}. I am ${age} years old. My SR-Code is ${student_num}.`)
// }

// studentInfo("Kristine Anselle Calaluan", "22", "21-02623");

/*
10. Write a function that takes in a number. Check if:
    - number is added or subtracted by 1, equates to an odd number
    - return true or false otherwise
*/

// function oddNumIdentifier(num) {
//     let incrementedNum = num + 1;  // add 1
//     let decrementedNum = num - 1;  // subtract 1

//     let compare = (incrementedNum % 2 !== 0) || (decrementedNum % 2 !== 0);
//     return compare;
// }

// display = oddNumIdentifier(3);
// console.log(display);

/*
11. Write a function that generates the string "Hello from JavaScript".
*/

// function greeting () {
//     let print = `Hello,  from JavaScript`;
//     return print;
// }

// display = greeting();
// console.log(display);

/*
12. Look for the specifications of your device, choose three specifications. Using these specifications, write a parameterized function that prints something descriptive about your device.
*/

// function realme6i (spec1, spec2, spec3) {
//     console.log (`The realme 6i has ${spec1}, ${spec2} and ${spec3}.`)
// }

// realme6i("5000mAh Massive Battery","18W Quick Charge", "48MP AI Quad Camera");

/*
13. Write a function that converts a given temperature value in Celsius into Fahrenheit. *Pwede i-google formula ng conversion. Google lang ahhh :) (AYAW Q hehe)

Multiply: the Celsius temperature by 9/5 (or 1.8).
Add: 32 to the product.
*/

// function celsiusToF (celsius) {
//     let calcCtoF = (celsius * 1.8) + 32;
//     console.log(`${celsius} degrees celsius is ${calcCtoF} degrees in farenheit`);
// }

// celsiusToF(20);

/*
14. Write a function that calculates the volume of a square pyramid. *Pwede i-google formula. Google lang ahhh :) (AYAW Q ul8)
*/

// function volSqPyramid (a,h) {
//     let SqPyramidVol = (a**2)*(h/3);
//     console.log(SqPyramidVol);
// }

// volSqPyramid(12,10);

/*
15. Write a function that prints the incremented-by-1 and decremented-by-1 value of its argument.
*/

// function incDecrement(num) {
//     console.log("Incremented value: " + (num ++));
//     console.log("Decremented value: " + (num --));
// }

// incDecrement(10);

/* 
16. Write a function that prints:
    - the inceremented-by-5 value of its argument
    - the decremented-by-3 value of its argument
    - the multiplied-by-4 value of its argument
    - the divided-by-2 value of its argument
*/

// function simpleCalculator (num){

//     console.log(num + 5);
//     console.log(num - 3);
//     console.log(num * 4);
//     console.log(num / 2);
// }

// simpleCalculator(10);

/*
17. Write a function that takes in two numbers 
and prints true if either of the two numbers is divisible by 2 
and false otherwise.
*/

// function twoNumDivisibleBy2(num1, num2) {
//     console.log(num1 % 2 == 0 || num2 % 2 == 0);
// }

// twoNumDivisibleBy2(4, 4);

/*
18. Write a function that takes in two numbers and prints true if both numbers is divisible by 2 and false otherwise.
*/

// function twoNumDivisibleBy2 (num1, num2) {
//     console.log(num1 % 2 == 0 && num2 % 2 == 0);
// }

// twoNumDivisibleBy2(4, 4);


/*
19. Declare a variable and assign the value 100. Print:
    -  the result of the value when the number is incremented by 50
    -  the result of the value when the number is decremented by 50
    -  the result of the value when the number is squared
    -  the result of the value when the number is divided by 10
    -  the result of the value when the number is multiplied by 2
    -  the remainder when divided 3
*/

// let var1 = 100;

// result1 = var1 + 50;
// result2 = var1 - 50;
// result3 = var1 ** 2;
// result4 = var1 / 10;
// result5 = var1 * 2;

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);

/*
20. Using these values, 10 and 5. Write a function that prints 105 and 15.
*/

// function calc (num1,num2) {
//     let cube = `${num1}` + `${num2}`
//     let sum = num1 + num2;

//     console.log(cube);
//     console.log(sum);
// }

// calc(10,5);

/*
21. Write a function that takes a first name and a last name, 
    and prints the full name in the format: "Full name: John Doe".
    (Use string interpolation.)
*/

// function fullName (firstname,lastname) {
//     console.log(`Full Name: ${firstname} ${lastname}`)
// }

// fullName("John", "Doe");

/*
22. Declare a variable message with the value "JavaScript". 
    Append the text " is awesome!" to it using +=, then print the result.
*/

// var message = "JavaScript";
// addText = message += " is awesome!";

// console.log(addText);

/*
23. Write a function that takes a city and a country as arguments 
    and prints: "I live in CITY, COUNTRY".
*/

// function liveIn(city, country) {
//     console.log(`I live in ${city}, ${country}`);
// }

// liveIn('Batangas City', 'Philipines')

/*
24. Start with let score = 0. 
    Add 10 points, then subtract 3 points, then multiply the score by 2 
    (use assignment operators each time). Print the final score.
*/

// let score = 0;

// score += 10;
// score -= 3;
// score *= 2;

// console.log("Final Score: " + score);

/*
25. Write a function that takes a product name and a price, 
    and prints: "The product PRODUCT costs PRICE pesos".
*/

// function productDetails (product_name, price) {
//     console.log(`The product ${product_name} costs ${price} pesos`);
// }

// productDetails("Garnier Sunscreen","299");

/*
26. Declare a variable sentence = "Today". 
    Use += to add " is a great" and then add " day." 
    Print the final string.
*/

// var sentence = "Today";
// addText = sentence += " is a great";
// addText2 = addText += " day.";

// console.log(addText2);

/*
27. Write a function that takes in a person's name and age 
    and prints: "NAME is AGE years old this year".
*/

// function personalInfo (name1, age1) {
//     console.log(`${name1} is ${age1} years old this year`);
// }

// personalInfo("John","30");

/*
28. Start with let counter = 5. 
    Increase the value by 7, then decrease it by 2, then divide it by 5. 
    Print the final value.
*/

// function finVal (){
//     let counter = 5;
//     counter += 7;
//     counter -= 2;
//     counter /= 5;
//     return counter;
// }

// display = finVal();
// console.log(display);

/*
29. Write a function that takes two strings, firstWord and secondWord, 
    and prints them combined with a space between using interpolation.
*/

// function wordCombine (firstword, secondword){
//     console.log(`${firstword}`+` `+`${secondword}`)
//     console.log(`${firstword} ${secondword}`);
// }

// wordCombine("one", "day")

/*
30. Start with let text = "Learning". 
    Use += to add " JavaScript" and then " step by step". 
    Print the final sentence.
*/

// let text = "Learning";
// addText = text += " JavaScript";
// addText2 = addText += " step by step";

// let text = "Learning";
// text += " JavaScript";
// text += " step by step.";

// console.log(text);


/*
31. Write a function that takes a username and prints:
    "Welcome back, USERNAME!" using template literals.
*/

// function welcomeMessage (username){
//     console.log(`Welcome back, ${username}!`)
// }

// welcomeMessage("krstn.nsll")

/*
32. Start with let balance = 1000. 
    Subtract 250 (expense), then add 500 (deposit), 
    then multiply balance by 1.05 (5% interest). 
    Print the final balance.
*/


// let balance = 1000;

// balance -= 250;
// balance += 500;
// balance *= 1.05;

// console.log("Final Balance: " + balance);


/*
33. Write a function that takes a subject and a grade, 
    and prints: "You got GRADE in SUBJECT".
*/

// function gradeRecord (subject, grade) {
//     console.log(`You got ${grade} in ${subject}`);
// }

// gradeRecord("Differential Calculus","1.5");

/*
34. Declare let phrase = "I love". 
    Use += to add " coding" and then add " in JavaScript". 
    Print the final phrase.
*/

// let phrase = "I don't love";
// phrase += " coding";
// phrase += " in JavaScript";

// console.log(phrase);

/*
35. Write a function that takes a name and a hobby 
    and prints: "NAME enjoys HOBBY every weekend".
*/

// function nameHobby (name2, hobby) {
//     console.log(`${name2} enjoys ${hobby} every weekend`);
// }

// nameHobby("Anselle","Volleyball");

/*
36. Start with let points = 50. 
    Add 20, subtract 10, divide by 2, and then multiply by 3 (use assignment operators). 
    Print the final result.
*/

// let points = 50;

// points += 20;
// points -= 10;
// points /= 2;
// points *= 3;

// console.log("Final Score: " + points);

/*
37. Write a function that takes a city and a temperature, 
    and prints: "It is TEMPERATURE°C in CITY today."
*/

// function weatherDetails (temperature, city) {
//     console.log(`It is ${temperature}°C in ${city} today.`);
// }

// weatherDetails("33","Batangas City");

/*
38. Declare let sentence = "This". 
    Append " is" using +=, then append " JavaScript practice". 
    Print the final string.
*/

// let sentence = "This";
// sentence += " is";
// sentence += " JavaScript practice";

// console.log(sentence);


/*
39. Write a function that takes two numbers, num1 and num2, 
    and prints: "The sum of NUM1 and NUM2 is RESULT".
*/

// function sumCalc (Num1, Num2) {
//     let result = Num1 + Num2;
//     console.log(`The sum of ${Num1} and ${Num2} is ${result}.`);
// }

// sumCalc(15,10);

/*
40. Start with let health = 100. 
    Subtract 30 (damage), add 10 (healing), then divide health by 2. 
    Print the final health value.
*/

// function finalHealth () {
//     let health = 100, damage = 30, healing = 10;
//     let withDamage = health - damage;
//     let withHealing = withDamage + healing;
//     let finHealth = withHealing / 2;
//     return finHealth;
// }

// display = finalHealth();
// console.log(display);

/*
41. Declare let a = 5, b = 10. 
    Print the result of a > b.
*/

// function compare () {
//     let a = 5, b = 10;
//     let result = a > b;
//     return result;
// }

// display = compare ();
// console.log(display);

/*
42. Declare let x = 8, y = 12. 
    Print the result of x < y && y > 10.
*/

// function emeLang () {
//     let x = 8, y = 12;
//     let result = x < y && y > 10;
//     return result;
// }

// display = emeLang();
// console.log(display);

/*
43. Start with let status = ""; 
    Use ||= to set it to "active". 
    Print status.
*/

// let stat = "";
// let setActive = stat ||= "active";

// console.log(setActive);

/*
44. Declare let count = 0; 
    Use += to add 3, then *= 2. 
    Print count.
*/

// function finCount (){
//     let count = 0;
//     let add = count += 3;
//     let multiply = add *= 2;
//     return multiply;
// }

// display = finCount();
// console.log(display);


/*
45. Declare let loggedIn = false; 
    Use ||= to set it to true. 
    Print loggedIn.
*/

// // If the first statement is false, returns the second statement
// let LoggedIn = false;
// let isTrue = LoggedIn ||= true;

// console.log(isTrue);


/*
46. Declare let role = null; 
    Use ??= to set it to "guest". 
    Print role.
*/

// let role = null;
// role ??= 'guest'

// console.log(role)

/*
47. Declare let a = true, b = false; 
    Print the result of a || b.
*/

// let a = true, b = false; 
// result = a || b;

// console.log(result);

/*
48. Declare let num = 20; 
    Use /= 5, then **= 2. 
    Print num.

*/

// let num = 20;

// num/=5;
// num**=2;

// console.log(num)

/*
49. Declare let firstName = "Jane"; 
    Print: `Hello, ${firstName || "Guest"}` using interpolation.
*/

// let firstName = "Jane";

// console.log(`Hello, ${firstName || "Guest"}`);

/*
50. Declare let isMember = true; 
    Use &&= to set isMember to false. 
    Print isMember.
*/

// function memberStatus() {
//     let isMember = true;
//     isMember &&= false;
//     return isMember;
// }

// let display = memberStatus();
// console.log(display);


/*
RESULT:

   36/50

   Pasagutan po ng: AYAW Q PO;
    - 10
    - 15
    - 16
    - 17
    - 18
    - 19
    - 23
    - 24
    - 32
    - 36
    - 46
    - 48
    - 49
    - 50

    :)
*/
