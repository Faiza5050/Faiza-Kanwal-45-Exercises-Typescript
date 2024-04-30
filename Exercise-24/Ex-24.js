// Ex-24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want
// to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let name1 = "Faiza";
let name2 = "Kanwal";
console.log("Testing Equality and inequality with String");
console.log(`"Is name1 === Faiza? I predict True"`);
console.log(name1 === "Faiza");
console.log(`"Is name2 is not equal to Kanwal? I predict False"`);
console.log(name2 !== "Kanwal");
console.log("\nUsing the Lower Case Function");
console.log(`"Is Faiza equal to faiza after converting to lowercase? I predict True"`);
console.log("Faiza".toLowerCase() === "faiza");
console.log(`"Is Faiza not equal to faiza after converting to lowercase? I predict False"`);
console.log("Faiza".toLowerCase() !== "faiza");
console.log("\nNumerical Tests");
let number1 = 15;
let number2 = 20;
console.log(`"Is number1 equal to 15? I predict True"`);
console.log(number1 === 15);
console.log(`"Is number1 equal to number2? I predict False"`);
console.log(number1 === number2);
console.log(`\n"Is number1 greater than 10? I predict True"`);
console.log(number1 > 10);
console.log(`"Is number1 less than 10? I predict False"`);
console.log(number1 < 10);
console.log(`\n"Is number2 greater than or equal to 20? I predict True"`);
console.log(number2 >= 20);
console.log(`"Is number1 less than or equal to 15? I predict False"`);
console.log(number1 <= 10);
console.log(`\nUsing "and" Operators`);
console.log(`"Is number1 not equal to 20 and number1 is greater than 10? I predict True"`);
console.log(number1 !== 20 && number1 > 10);
console.log(`"Is number2 equal to 25 and number2 is less than 30? I predict False"`);
console.log(number2 === 20 && number2 > 30);
console.log(`\nUsing "or" Operators`);
console.log(`"Is number1 equal to 15 OR number1 is greater than 10? I predict True"`);
console.log(number1 === 15 || number1 > 10);
console.log(`"Is number1 not equal to 15 and number1 is greater than 30? I predict False"`);
console.log(number1 !== 15 || number1 > 30);
console.log("\nItem in array");
let array = ["Chair", "Table", "Mirror", "Sofa"];
console.log("Is `4` in the array? I predict False");
console.log(array.includes("4"));
console.log("Item not in array");
console.log("Is `4` not in the array? I predict True");
console.log(!array.includes("4"));
export {};
