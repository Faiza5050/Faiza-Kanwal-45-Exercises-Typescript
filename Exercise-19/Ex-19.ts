// Ex-19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.

let guestList4 : string[] = ["MAHA", "USAMA", "FAIZA", "AHMER", "ZAROON", "AREESHA", "MANTASHA"];

guestList4.forEach(person => {
    // console.log(`Dear ${person}, \nWe are arranged "Eid Millon Party" at Home and you are invited to dinner, We request the honor of your presence.`);
});

console.log(`We are invited total ${guestList4.length} guests to dinner.`);
