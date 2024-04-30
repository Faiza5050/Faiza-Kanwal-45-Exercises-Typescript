// Ex-32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the 
// person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["Musharaf", "Saeeda", "ahmer", "Usama", "Maha"];
let new_users = ["Faiza", "Saeeda", "Areesha", "Shereen", "ahmer"];
new_users.forEach(new_user1 => {
    if (current_users.some(current_users1 => current_users1.toLowerCase() === new_user1.toLowerCase())) {
        console.log(`Sorry, ${new_user1} has already been used, You will need to enter a new username.`);
    }
    else {
        console.log(`${new_user1} is available!`);
    }
});
export {};