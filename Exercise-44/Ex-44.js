// Ex-44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function 
// should have one parameter that collects as many items as the function call provides, and it should print a summary of 
// the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwiches(...items) {
    console.log("\nOrdered a Sandwich with the following items:");
    items.forEach(item1 => console.log(item1));
    console.log("Your Order is ready, Enjoy your Yummy Sandwich!");
}
sandwiches("Ketchup", "Mayo", "Chicken", "Egg", "Tomato", "Cheese");
sandwiches("Egg", "Bread", "Butter");
sandwiches("Beef", "Egg", "Tomato", "Butter", "Ketchup", "Garlic");
export {};
