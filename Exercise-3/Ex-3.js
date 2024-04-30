// Ex-3: Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "Faiza Kanwal";
console.log("lowercase:", personName.toLowerCase());
console.log("UPPERCASE:", personName.toUpperCase());
console.log("TitleCase:", personName.replace(/\b\w/g, (char) => char.toUpperCase()));
export {};
