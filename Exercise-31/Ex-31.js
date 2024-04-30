// Ex-31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let userList = ["Faiza", "Admin", "Maha", "Zariya", "Saeeda"];
let emptyList = [];
if (userList.length > 0) {
    console.log("Your List is empty, you need to find some users!");
}
else {
    userList.forEach(user1 => {
        if (user1 === "Admin") {
            console.log(`Hello ${user1}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${user1}, Thank you for logging in again.`);
        }
    });
}
export {};
